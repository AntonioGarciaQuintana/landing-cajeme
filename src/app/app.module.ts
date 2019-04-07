import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/HomeComponent/home.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryPersonCompanyComponent } from './components/galleryPersonCompanyComponent/gallerypersoncompany.component';
import { GalleryByWorldComponent } from './components/gallerycajemensebyworldComponent/gallerybyworld.component';
import { DonateComponent } from './components/donate/donate.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UiSwitchModule } from 'ngx-ui-switch';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ArticlesComponent } from './components/donate/articlesection/articles.component';
import { DatosPersonalesComponent } from './components/donate/datospersonales/datos.component';
import { PaypalComponent } from './components/donate/paypalSection/paypal.component';
import { StepsService } from './Service/steps.service';
import { ToastrModule } from 'ng6-toastr-notifications';
import { NotificationService } from './Service/notification.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ErrorsHandler } from './Service/error-handler.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryPersonCompanyComponent,
    GalleryByWorldComponent,
    DonateComponent,
    ArticlesComponent,
    DatosPersonalesComponent,
    PaypalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    UiSwitchModule,
    LeafletModule.forRoot(),
    ToastrModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    StepsService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
