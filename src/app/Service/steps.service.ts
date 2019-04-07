import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class StepsService {

    @Output() paypalStep = new EventEmitter<any>();
    @Output() personalInfo = new EventEmitter<any>();
    @Output() modalHide = new EventEmitter<any>();

    fourStep() {
        this.paypalStep.emit(null);
    }

    threeStep() {
        this.personalInfo.emit(null);
    }

    onModalHide() {
        this.modalHide.emit(null);
    }
}
