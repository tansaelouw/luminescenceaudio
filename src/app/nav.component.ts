import {
    Component, EventEmitter,
    OnInit, Output,
    ViewEncapsulation
} from '@angular/core';
// import {DataService, Cate, Product} from "./data.service";
import { Nav, Cate, Product} from "./data.model";

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'mainnav',
    encapsulation: ViewEncapsulation.None,
    styles: [
       ''
    ],
    template: `        
        <a class="w3-right" id="toggler" (click)="togglerClick($event)">☰</a>
        
        <div class="logo-container">
            <a class="w3-left w3-block logo" [routerLink]="['/']">
                <img id="logo" src="{{logo}}">
            </a>
        </div>
        
        <div class="codrops-top">
            <ul>
                <li><a [routerLink]="['products/cate',{id: 'c1'}]" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">-PRODUCTS-</a></li>
                <li><a [routerLink]="['pages/reviews']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">-REVIEWS-</a></li>
                <li><a [routerLink]="['pages/news']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">-NEWS-</a></li>
                <li><a [routerLink]="['pages/warranty']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">-WARRANTY-</a></li>
                <li><a [routerLink]="['pages/service']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">-SERVICE-</a></li>
                <li><a [routerLink]="['pages/philosophy']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">-PHILOSOPHY-</a></li>
                <li><a [routerLink]="['pages/vacuumtube']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">-VACUUM TUBE-</a></li>
                <li><a [routerLink]="['pages/contact']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">-CONTACT US-</a></li>
            </ul>
        </div><!--/ Codrops top bar -->
        
        
        <div id="mySidenav" class="sidenav w3-sidebar w3-bar-block w3-dark w3-card-2" style="width:200px">
                
                <button class="w3-button w3-block w3-left-align" (click)="productOpen('mainProduct')">
                    PRODUCTS  <i class="fa fa-caret-down" style="font-size:10px;"></i>
                </button>
            <div id="mainProduct" class="w3-hide w3-dark w3-card-2">
                <div *ngFor="let cate of cates | async">
                    <button class="w3-button w3-block w3-left-align" (click)="productOpen(cate.id)" style="font-size:14px;padding-left:24px;">
                        {{cate.name}} <i class="fa fa-caret-down" style="font-size:10px;"></i>
                    </button>
                    <div id="{{cate.id}}" class="w3-hide w3-dark w3-card-2">
                        <a [routerLink]="['products/cate',{id:cate.id}]" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}" class="w3-bar-item sub-cate" style="font-size:12px;padding-left:40px;">
                            -  {{cate.name}} HOME
                        </a>
                        <a *ngFor="let p of cate.products" [routerLink]="['products/detail',{cid:cate.id,pid:p.id}]" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}" class="w3-bar-item sub-cate" style="font-size:12px;padding-left:40px;">
                            - {{p.name}}
                        </a>
                    </div>
                </div>
            </div>
                <a [routerLink]="['pages/reviews']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">-REVIEWS-</a>
                <a [routerLink]="['pages/news']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">-NEWS-</a>
                <a [routerLink]="['pages/warranty']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">-WARRANTY-</a>
                <a [routerLink]="['pages/service']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">-SERVICE-</a>
                <a [routerLink]="['pages/philosophy']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">-PHILOSOPHY-</a>
                <a [routerLink]="['pages/vacuumtube']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">-VACUUM TUBE-</a>
                <a [routerLink]="['pages/contact']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">-CONTACT US-</a>
        </div>
         `
})
export class NavComponent implements OnInit {
    public isSideNavOpen = false;
    public logo = '/assets/img/logo.svg';
    private catesCollection: AngularFirestoreCollection<Nav>;
    private cates: Observable<Nav[]>;


    constructor(private afs: AngularFirestore,) {}

    public ngOnInit() {
        this.catesCollection = this.afs.collection<Nav>('navs');
        this.cates = this.catesCollection.valueChanges();
    }

    public togglerClick(button){
        // this.onToggleSidebarEvent.emit(button);

            let sideNav = document.getElementById('mySidenav');
            let toggler = document.getElementById('toggler');

            if(!this.isSideNavOpen){
                sideNav.style.left = '0';
                 document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
                toggler.innerText = 'x';
                this.isSideNavOpen = true;
            }else{
                sideNav.style.left = '-200px';
                toggler.innerText = '☰';
                 // document.body.style.backgroundColor = 'white';
                this.isSideNavOpen = false;
            }

    }

    public productOpen(id){
        let x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }

    }

    ngOnDestroy(){
        // this.fbSub.unsubscribe();
    }

}
