import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
    selector: 'app-home',
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        $('#countdown-3').timeTo({
            timeTo: new Date('2019-07-30T23:59:45'),
            countdown: false,
            displayDays: 2,
            theme: 'black',
            displayCaptions: true,
            fontSize: 48,
            captionSize: 14,
            languages: {
                pl: { days: 'Días', hours: 'Horas', min: 'Minutos', sec: 'Segundos' }
            },
            lang: 'pl'
        });
    }

}
