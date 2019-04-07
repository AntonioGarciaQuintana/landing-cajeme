import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
    selector: 'app-galley-person-company',
    styleUrls: ['./gallerypersoncompany.component.css'],
    templateUrl: './gallerypersoncompany.component.html'
})
export class GalleryPersonCompanyComponent implements OnInit {
    ngOnInit(): void {
        this.configureGallery();
    }

    configureGallery() {
    }
}
