import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './product.routes';
import { ProductComponent } from './product.component';
import {CateComponent} from "./cate.component";
import {ProductDetailComponent} from "./product-detail.component";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
    declarations: [
        ProductComponent,
        CateComponent,
        ProductDetailComponent
    ],
    imports: [
        CommonModule,
        AngularFireAuthModule,
        AngularFireModule,
        AngularFirestoreModule,
        FormsModule,
        // BrowserAnimationsModule,
        RouterModule.forChild(routes),
    ],
})
export class ProductModule {
    public static routes = routes;
}
