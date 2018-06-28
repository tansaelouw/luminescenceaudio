import {
  Component,
  OnInit,
    Input
} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Cate, Product} from "../data.model";

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'product-detail',
  template: `
      <div class="productDetail" class="w3-main" style="margin-left:300px;">
          <!--<router-outlet name="productDetail"></router-outlet>-->

          <!-- Header -->
          <header id="portfolio">
              <div class="w3-container">
                  <h3>{{ (product | async)?.name }}</h3>
                  <!--<h3>{{ product.name }}</h3>-->
                  <img src="{{ (product | async)?.imgfile }}" width="100%"/>
                  <!--<img src="{{ product.imgfile }}" width="100%"/>-->
              </div>
              <div class="w3-container w3-padding-large" style="margin-bottom:32px" [innerHTML]="(product | async)?.description">
              <!--<div class="w3-container w3-padding-large" style="margin-bottom:32px" [innerHTML]="product.description">-->
                  <!--<h4></h4>-->
              </div>
          </header>

          <div class="w3-row-padding">
          </div>
      </div>
  `,
})
export class ProductDetailComponent implements OnInit {

    private prodDoc: AngularFirestoreDocument<Product>;
    private product: Observable<Product>;

    constructor(private afs: AngularFirestore, private router: Router, private route : ActivatedRoute) {}

    public ngOnInit() {
        this.route.params.subscribe(q =>{
            let path = `products/${q.cid}/children/${q.pid}`;
            this.prodDoc = this.afs.doc<Product>(path);
            this.product = this.prodDoc.valueChanges();
            });
    };
}

