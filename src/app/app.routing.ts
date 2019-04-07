import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './components/HomeComponent/home.component';
import { GalleryPersonCompanyComponent } from './components/galleryPersonCompanyComponent/gallerypersoncompany.component';
import { GalleryByWorldComponent } from './components/gallerycajemensebyworldComponent/gallerybyworld.component';
import { DonateComponent } from './components/donate/donate.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    {path: '', component: AppComponent, pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'galleryperson', component: GalleryPersonCompanyComponent },
    { path: 'gallerybyworld', component: GalleryByWorldComponent },
    { path: 'donate', component: DonateComponent }
   // { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
