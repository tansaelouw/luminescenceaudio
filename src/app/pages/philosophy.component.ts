import {
    Component,
    OnInit,
} from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Philosophy{
    html:string;
}

@Component({
    selector: 'philosophy',
    template: `
        <div class="w3-padding side-padding w3-container text-grey" [innerHTML]="(philosophy | async)?.html"></div>
    `,
})
export class PhilosophyComponent implements OnInit {

    private philosophyDoc: AngularFirestoreDocument<Philosophy>;
    private philosophy: Observable<Philosophy>;

    constructor(private afs: AngularFirestore) {

    }

    public ngOnInit() {
        this.philosophyDoc = this.afs.doc<Philosophy>('pages/philosophy');
        this.philosophy = this.philosophyDoc.valueChanges();
    }

}
