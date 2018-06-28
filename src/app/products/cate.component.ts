import {
    Component,
    OnInit,
    HostListener,
    Inject,
    Input, OnDestroy, OnChanges
} from '@angular/core';


import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ProductListComponent } from "./product-list.component";

import { DOCUMENT } from '@angular/platform-browser';

import { Cate, Product } from "../data.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'cate',
    template: `        
        <div class="product-detail w3-main" style="margin-left:300px;">

            <!-- Header -->
            <header id="portfolio">
                <div class="w3-container">
                    <h3>{{ (cate | async)?.name }}</h3>
                    
                    <img src="{{ (cate | async)?.imgfile }}" width="100%"/>
                </div>
                <div class="w3-container w3-padding-large" style="margin-bottom:32px" [innerHTML]="(cate | async)?.description">
                </div>
            </header>
            <hr class="w3-gray">
            
            <div class="w3-row-padding">
            </div>
            <!-- First Photo Grid-->
            <div class="w3-row-padding">
                <!--<div class="w3-third w3-container w3-margin-bottom" style="height:128px;overflow-y: hidden;" *ngFor="let p of (cate| async)?.children">-->
                    <!--<a [routerLink]="['/products/detail', {cid: cateId, pid: p.id}]">-->
                    <!--<img src="{{p.imgfile}}" alt="{{p.name}}" style="width:100%" class="w3-hover-opacity">-->
                    <!--</a>-->
                <!--</div>-->
                <div class="w3-third w3-container w3-margin-bottom" style="height:128px;overflow-y: hidden;" *ngFor="let p of products | async">
                    <a [routerLink]="['/products/detail', {cid: cateId, pid: p.id}]">
                    <img src="{{p.imgfile}}" alt="{{p.name}}" style="width:100%" class="w3-hover-opacity">
                    </a>
                </div>
            </div>
            </div>
    `,
})



export class CateComponent implements OnInit, OnDestroy{


    private cateDoc: AngularFirestoreDocument<Cate>;
    private cate: Observable<Cate>;
    private productsCollection: AngularFirestoreCollection<Product>;
    private products: Observable<Product[]>;
    private cateId: string;

    constructor(private afs: AngularFirestore, private router: Router, private route : ActivatedRoute) {
    }

    public ngOnInit() {
        this.route.params.subscribe(q =>{
            this.cateId = q.id;
            let path = 'products/' + q.id;

            this.cateDoc = this.afs.doc<Cate>(path);
            this.cate = this.cateDoc.valueChanges();

            this.productsCollection = this.afs.collection<Product>(`products/${q.id}/children`);
            this.products = this.productsCollection.valueChanges();
        });
    }

    public ngOnDestroy(){
    }


}
