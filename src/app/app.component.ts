/**
 * Angular 2 decorators and services
 */
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { DataService } from './data.service';
import { fadeInAnimation } from './_animations/fade-in.animation';

/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.css'
    ],
    template: `        
            <mainnav></mainnav>
            <main id="main">
                <router-outlet></router-outlet>
            </main>
            <div class="w3-clear footer">
                <footer id="footer" class="w3-container">
                    <div class="w3-row-padding"><a (click)="login()">@</a><span> Made in Canada</span></div>
                </footer>
            </div>
    `
})
export class AppComponent implements OnInit {

    constructor(data: DataService) {
    }

    public ngOnInit() {
    }

    public login(){
        console.log("go to login.");
    }

    private getState(outlet) {
        return outlet.activatedRouteData.state;
    }
    //
    // public openSidebar($event){
    //     console.log($event);
    //     console.log(this.sideNav);

        // if(!this.isSideNavOpen){
        //     this.sideNav.style.width = "250px";
        //     document.getElementById("main-wrapper").style.left = "0";
        //     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        //     this.isSideNavOpen = true;
        // }else{
        //     document.getElementById("mySidenav").style.left = "-250";
        //     document.getElementById("main-wrapper").style.marginLeft= "0";
        //     document.body.style.backgroundColor = "white";
        //     this.isSideNavOpen = false;
        // }

    // }
}

//   Please review the https://github.com/AngularClass/angular2-examples/
//    <nav>
//       <a [routerLink]=" ['./'] "
//         routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
//         Index
//       </a>
//       <a [routerLink]=" ['./home'] "
//         routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
//         Home
//       </a>
//       <a [routerLink]=" ['./detail'] "
//         routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
//         Detail
//       </a>
//       <a [routerLink]=" ['./barrel'] "
//         routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
//         Barrel
//       </a>
//       <a [routerLink]=" ['./about'] "
//         routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
//         About
//       </a>
//      </nav>
// <footer>
//   <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
// <div style="background-color: #333; border-color: #333;">
// <a [href]="url">
// <img [src]="angularclassLogo" width="25">
//   </a>
//   </div>
//   </footer>
