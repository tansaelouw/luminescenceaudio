import {
    Component,
    OnInit,
} from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Review{
   article:string,
    imgfile:string,
    name:string
}

@Component({
    selector: 'reviews',
    template: `        
        <div class="w3-container w3-padding text-center">
            <h3 class="contact-header text-center">Luminescenceaudio Product Review</h3>
            <div class="w3-container  review-card text-gray text-center" *ngFor="let r of reviews | async">
                <div class="row w3-padding-24"><div class="col-xs-12" style="width:100%;text-align:center;">{{r.article}}</div></div>
                <div class="row">
                    <div  style="width:50%;text-align: left;">
                        <a href="{{r.imgfile}}"  style="width:100%;height:40px;display:block; text-decoration: none;">
                            <img src="assets/icon/pdf.svg" style="display:inline-block;"/>
                            <p class="header-clean" style="display:inline-block;">{{r.name }}</p>
                        </a>
                    </div>
                    <div style="width:50%;text-align: right;">
                        <i class="text-grey text-right">{{r.resource}}</i>
                    </div>
                </div>
            </div>
        </div>
  `,
})
export class ReviewsComponent implements OnInit {

    private reviewsCollection: AngularFirestoreCollection<Review>;
    private reviews: Observable<Review[]>;

    constructor(private afs: AngularFirestore){}

    public ngOnInit() {

        this.reviewsCollection = this.afs.collection('reviews');
        this.reviews = this.reviewsCollection.valueChanges();

    }

}
