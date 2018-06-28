import {
    Component,
    OnInit,
} from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Service{
    html:string;
}

@Component({
    selector: 'service',
    template: `
        <div class="w3-padding side-padding w3-container text-grey" [innerHTML]="(service | async)?.html"></div>
    `,
})
export class ServiceComponent implements OnInit {

    private serviceDoc: AngularFirestoreDocument<Service>;
    private service: Observable<Service>;

    constructor(private afs: AngularFirestore) {

    }

    public ngOnInit() {
        this.serviceDoc = this.afs.doc<Service>('pages/service');
        this.service = this.serviceDoc.valueChanges();
    }

}
