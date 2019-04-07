import { Component, OnInit, Renderer, ElementRef } from '@angular/core';
import { StepsService } from 'src/app/Service/steps.service';
declare var $: any;

@Component({
    selector: 'app-datos',
    templateUrl: './datos.component.html',
    styleUrls: ['./datos.component.css']
})
export class DatosPersonalesComponent implements OnInit {
    isPublic = true;
    isPerson = true;
    selectedFiles: File;
    dropifyElement: any;
    // step4: ElementRef;
    // @ViewChild('step4') set content(content: ElementRef) {
    //     this.step4 = content;
    //  }
    constructor(private renderer: Renderer, private stepService: StepsService) {
    }

    ngOnInit(): void {
        this.dropifyElement = $('.dropify').dropify({
            tpl: {
                wrap: '<div class="dropify-wrapper"></div>',
                loader: '<div class="dropify-loader"></div>',
                message: '<div class="dropify-message"><span class="file-icon" /><p>Seleccione una imagen o arrastre una imagen</p></div>',

            },
            error: {
                fileSize: 'La foto no debe pesar mas de ({{ value }}).',
                maxWidth: 'La imagen no debe ser mas ancho de ({{ value }}px).',
                maxHeight: 'La imagen no debe ser mas alta de  ({{ value }}px).',
            }
        });
    }

    selectFile(event: any) {
        const file = event.target.files.item(0);
        if (file.type.match('image.*')) {
            const fileReader = new FileReader();
            fileReader.onload = (ev: any) => {
                const img = new Image();
                img.onerror = (imageEvent: any) => {
                    // this._toastr.error('La imagen es invalida');
                    this.selectedFiles = null;
                    this.reset();
                };
                img.src = ev.target.result;
                this.selectedFiles = file;
            };
            fileReader.readAsDataURL(file);
        }
    }

    reset() {
        const drEvent = $('.dropify').dropify();
        const dropify = drEvent.data('dropify');
        dropify.resetPreview();
        dropify.clearElement();
    }

    goToPaypal() {
        this.stepService.fourStep();
    }

}
