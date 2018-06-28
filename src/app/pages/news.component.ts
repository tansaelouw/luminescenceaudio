import {
    Component,
    OnInit,
} from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface News{
    html:string,
}

interface Page{
   html:string
}

@Component({
    selector: 'new',
    template: `
        
        <div class="w3-container w3-padding side-padding">
            <h3>NEWS ANNOUNCEMENT</h3>
            <div class="w3-container w3-padding, text-gray" [innerHTML]="(news | async)?.html"></div>
            
            <!--collection-->
            <!--<ul>-->
                <!--<li *ngFor="let p of news | async">-->
                    <!--<a>{{ p.html }}</a>-->
                <!--</li>-->
            <!--</ul>-->
            
        </div>
        <!--<div class="w3-container w3-padding text-grey" *ngIf="(news | async)?.items">-->
            <div class="w3-padding w3-container text-grey"  *ngFor="let item of (news | async)?.items" [innerHTML]="item"></div>
        <!--</div>-->
    `,
})
export class NewsComponent implements OnInit {

    private newsDoc: AngularFirestoreDocument<News>;
    private news: Observable<News>;
    // private pagesCollection: AngularFirestoreCollection<Page>;
    // private pages: Observable<Page[]>;

    constructor(private afs: AngularFirestore) {

    }

    public ngOnInit() {
        this.newsDoc = this.afs.doc<News>('pages/news');
        this.news = this.newsDoc.valueChanges();

       //   this.pagesCollection = this.afs.collection('pages');
       //   this.pages = this.pagesCollection.valueChanges();
    }
    update(pages: Page) {
        // this.newsDoc.update(pages);
    }

}
