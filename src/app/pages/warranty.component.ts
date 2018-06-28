import {
    Component,
    OnInit,
} from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Warranty{
    html:string;
}

@Component({
    selector: 'warranty',
    template: `        
        <div class="w3-padding side-padding w3-container text-grey" [innerHTML]="(warranty | async)?.html"></div>
    `,
})
export class WarrantyComponent implements OnInit {

    private warrantyDoc: AngularFirestoreDocument<Warranty>;
    private warranty: Observable<Warranty>;

    constructor(private afs: AngularFirestore) {

    }

    public ngOnInit() {
        this.warrantyDoc = this.afs.doc<Warranty>('pages/warranty');
        this.warranty = this.warrantyDoc.valueChanges();
    }

}
