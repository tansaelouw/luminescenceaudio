import {
    Component,
    OnInit,
} from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Vacuumtube{
    html:string;
}

@Component({
    selector: 'vacuumtube',
    template: `
        <div class="w3-padding side-padding w3-container text-grey" [innerHTML]="(vacuumtube | async)?.html"></div>
    `,
})
export class VacuumtubeComponent implements OnInit {

    private vacuumtubeDoc: AngularFirestoreDocument<Vacuumtube>;
    private vacuumtube: Observable<Vacuumtube>;

    constructor(private afs: AngularFirestore) {

    }

    public ngOnInit() {
        this.vacuumtubeDoc = this.afs.doc<Vacuumtube>('pages/vacuumtube');
        this.vacuumtube = this.vacuumtubeDoc.valueChanges();
    }

}
