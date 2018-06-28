import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './pages.routes';
import { PagesComponent } from './pages.component';
import {WarrantyComponent} from "./warranty.component";
import {ContactComponent} from "./contact.component";
import {NewsComponent} from "./news.component";
import {PhilosophyComponent} from "./philosophy.component";
import {ReviewsComponent} from "./reviews.component";
import {VacuumtubeComponent} from "./vacuumtube.component";
import {ServiceComponent} from "./service.component";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from "angularfire2/auth";
import { ContactCardDirective } from "../directives/contact-card.directive";
import {HttpModule} from "@angular/http";
import { FlashMessagesModule } from "angular2-flash-messages";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const FIREBASE_CONFIG =  {
        apiKey: "AIzaSyBdO0nPOLKINc_UauOVerX5SpXr_1ppQVM",
        authDomain: "luminescenceaudio.firebaseapp.com",
        databaseURL: "https://luminescenceaudio.firebaseio.com",
        projectId: "luminescenceaudio",
        storageBucket: "luminescenceaudio.appspot.com",
        messagingSenderId: "445268357631"
    };


@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    PagesComponent,
      WarrantyComponent,
      ContactComponent,
      NewsComponent,
      PhilosophyComponent,
      ReviewsComponent,
      VacuumtubeComponent,
      ServiceComponent,
      ContactCardDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    FlashMessagesModule,
    // BrowserAnimationsModule,
    RouterModule.forChild(routes),
  ],
})
export class PagesModule {
  public static routes = routes;
}
