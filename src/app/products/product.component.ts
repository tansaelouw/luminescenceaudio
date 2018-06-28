import {
    Component,
    OnInit,
    HostListener,
    Inject,
    Input,
    Output,
    Renderer,
} from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { DOCUMENT } from '@angular/platform-browser';

// import { DataService, Cate, Product} from "../data.service";
import { Cate, Nav, Product} from "../data.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'product',
  template: `
      <!-- Sidebar/menu -->
      <nav class="w3-sidebar w3-collapse w3-black w3-animate-left" style="width:300px;overflow-y:scroll;" id="productSidenav"><br>
          <div class="w3-container">
              <!--<img class="start" id="sidenavLogo" src="assets/img/logo.svg"><br><br>-->
              <!--<h5>PRODUCTS</h5>-->
          </div>
          <div class="product-sidenav"  *ngFor="let cate of navs | async" >

              <a [routerLink]="['cate', {id: cate.id}]" class="w3-bar-item w3-margin-left w3-text-grey oswald"> {{cate.name}}</a>
              <!--<a [routerLink]="['cate']" [queryParams]="{cateId: cate.id}" class="w3-bar-item w3-margin-left w3-text-grey oswald"> {{cate.name}}</a>-->

              <ul>
                  <li class="product-item" *ngFor="let p of cate.products;let pi = index">
                      <a [routerLink]="['detail',{cid:cate.id,pid: p.id}]" class="w3-bar-item w3-text-grey w3-small">{{p.name}}</a>
                      <!--<a [routerLink]="['detail']" [queryParams]="{prodId: p.id}" class="w3-bar-item w3-text-grey w3-small">{{p.name}}</a>-->
                  </li>
              </ul>
          </div>

      </nav>
      <router-outlet></router-outlet>
  `,
})
export class ProductComponent implements OnInit {

    private navsCollection: AngularFirestoreCollection<Nav>;
    private navs: Observable<Nav[]>;

    constructor(
        private afs: AngularFirestore,
        @Inject(DOCUMENT) private document: Document) {


}

    public ngOnInit() {

        this.navsCollection = this.afs.collection<Nav>('navs');
        this.navs = this.navsCollection.valueChanges();

    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        var productSidenav = this.document.getElementById("productSidenav");

        let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 100) {
            productSidenav.style.marginTop = '-80px';
        } else {
            productSidenav.style.marginTop = '-5px';
        }
    }


  public ngOnDestroy(){
  }


}
