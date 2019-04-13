import { OnInit, Component, TemplateRef, Input, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Marker, tileLayer, latLng } from 'leaflet';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Zone } from 'src/app/model/zone';
import { StepsService } from 'src/app/Service/steps.service';
declare var $: any;

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

    @Input() isCashDonate = false;
    modalRef: BsModalRef | null;
    map: L.Map;
    markers: Marker;
    compraCompleta = true;

    @ViewChild('detalle') detailShop: BsModalRef;
    options = {
        layers: [
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; Cd. Obregón, Sonora'
            }),
        ],
        zoom: 13,
        center: latLng([27.4773685, -109.9291206])
    };

    zones = [
        new Zone('27.470353624308093', '-109.95215039320396'),
        new Zone('27.489694851258268', '-109.94424952117492'),
        new Zone('27.5094894395861', '-109.94854347336461')
    ];

    formSaveArticle: FormGroup;

    constructor(private modalService: BsModalService, private stepService: StepsService) {

    }

    ngOnInit(): void {

        $('.search-panel .dropdown-menu').find('a').click((e) => {
            e.preventDefault();
            const param = $(this).attr('href').replace('#', '');
            const concept = $(this).text();
            $('.search-panel span#search_concept').text(concept);
            $('.input-group #search_param').val(param);
        });

        this.formSaveArticle = new FormGroup({
            zone: new FormControl('', Validators.required)
        });
    }

    /** metodos del maapa */
    onOpenMap() {
        setTimeout(() => {
            this.map.invalidateSize(false);
        }, 200);
    }

    onMapReady(map: L.Map) {
        this.map = map;
    }

    onPutMarker(ass: any) {
        if (this.markers) {
            this.map.removeLayer(this.markers);
        }
        this.markers = new Marker([ass.latlng.lat, ass.latlng.lng], { draggable: true });
        this.markers.addTo(this.map);
    }


    drawMap(index: number) {
        let zone: Zone = null;
        zone = this.zones[index];


        if (this.markers) {
            this.map.removeLayer(this.markers);
        }
        this.markers = new Marker([+zone.lat, +zone.lng], { draggable: true });
        this.markers.addTo(this.map);
    }

    onChange(value: any) {
        console.log(this.compraCompleta);
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    }

    goToPersonalInfo() {
        this.detailShop.hide();
        this.stepService.threeStep();
    }

}
