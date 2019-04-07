import { OnInit, Component, ElementRef, ViewChild, Renderer } from '@angular/core';
import { StepsService } from './../../Service/steps.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
declare let $: any;
@Component({
    selector: 'app-donate',
    styleUrls: ['./donate.component.css'],
    templateUrl: './donate.component.html'
})
export class DonateComponent implements OnInit {

    @ViewChild('step3') step3: ElementRef;
    @ViewChild('step2') step2: ElementRef;
    @ViewChild('step4') step4: ElementRef;

    @ViewChild('lgModal') modal: BsModalRef;

    isCash = false;

    constructor(private renderer: Renderer, private stepService: StepsService) {
    }
    ngOnInit(): void {
        this.configureWizard(0);

        this.stepService.paypalStep.subscribe(event => {
            this.goToPayPal();
        });

        this.stepService.personalInfo.subscribe(event => {
            this.goPersonalData();
        });

        this.stepService.modalHide.subscribe(event => {
            this.modalHide();
        });
    }

    configureWizard(step: number) {

        const btnFinish = $('<button></button>').text('Finish')
            .addClass('btn btn-info')
            .on('click', () => { alert('Finish Clicked'); });
        const btnCancel = $('<button></button>').text('Cancel')
            .addClass('btn btn-danger')
            .on('click', () => { $('#smartwizard').smartWizard('reset'); });

        $('#smartwizard').smartWizard({
            selected: step,
            theme: 'arrows',
            useURLhash: true,
            transitionEffect: 'fade',
            showStepURLhash: false,
            hiddenSteps: true,
            disabledSteps: [],
            toolbarSettings: {
                showNextButton: false,
                showPreviousButton: false
                // b toolbarExtraButtons: [btnFinish, btnCancel]
            }
        });
    }

    goPersonalData() {
        this.configureWizard(2);
        const event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(
            this.step3.nativeElement, 'dispatchEvent', [event]);
    }

    goToSelectArticle(iscach: boolean) {
        this.isCash = iscach;
        const event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(
            this.step2.nativeElement, 'dispatchEvent', [event]);
    }

    goToSelectService(iscach: boolean) {
        this.isCash = iscach;
        const event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(
            this.step2.nativeElement, 'dispatchEvent', [event]);
    }

    goToPayPal() {
        const event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(
            this.step4.nativeElement, 'dispatchEvent', [event]);
    }

    modalHide() {
        this.modal.hide();
    }

}
