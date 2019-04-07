import { Component, OnInit, Input } from '@angular/core';
import { StepsService } from 'src/app/Service/steps.service';
import { NotificationService } from 'src/app/Service/notification.service';

@Component({
    selector: 'app-paypal',
    templateUrl: './paypal.component.html',
    styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

    constructor(private stepService: StepsService, private notification: NotificationService) {

    }


    ngOnInit(): void {
    }

    onModalHide() {
        this.stepService.onModalHide();
        this.notification.success('Gracias por tu donación, porque juntos hacemos la diferencia');
    }

}
