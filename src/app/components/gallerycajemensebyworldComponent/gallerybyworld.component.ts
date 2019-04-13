import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng } from 'leaflet';
declare let $: any;
@Component({
    selector: 'app-galley-by-world',
    styleUrls: ['./gallerybyworld.component.css'],
    templateUrl: './gallerybyworld.component.html'
})
export class GalleryByWorldComponent implements OnInit {
    title = 'My first AGM project';
    lat = 51.678418;
    lng = 7.809007;
    map: L.Map;
    options = {
        layers: [
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; Cd. Obregón, Sonora'
            }),
        ],
        zoom: 13,
        center: latLng([27.4773685, -109.9291206])
    };
    ngOnInit(): void {
        this.configureGallery();
    }

    configureGallery() {
    }

    onMapReady(map: L.Map) {
        this.map = map;
    }
}
