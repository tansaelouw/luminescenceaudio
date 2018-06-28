import {
    Component,
    OnInit,
} from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import { FlashMessagesService } from "angular2-flash-messages";


interface Contact{
    name: string;
    rank: string;
    address: string;
    phone: string;
    email: string;
    fax: string;
}

@Component({
    selector: 'contact',
    template: `
        <flash-messages></flash-messages>
        <div class="w3-container side-padding w3-padding text-center">
            <h3 class="contact-header text-center">Menufacturer</h3>
            <div class="w3-container w3-padding, text-gray" 
                 *ngFor="let c of contacts | async">
                <div class="contact-card" 
                     *ngIf="c.rank === 'menufacturer'" lumContact>
                    <div class="col-xs-12">
                        <h5 class="header-clean">{{c.name}}</h5>
                    </div>
                    <div class="col-xs-12">
                        <p class="detail">{{c.address}}</p>
                    </div>
                    <div class="row-padding">
                        <p class="col-xs-12">
                            <span> <i class="fa fa-phone"></i></span>&nbsp; Tel :
                            <span>{{c.phone}}</span>
                        </p>
                        <p *ngIf="c.fax">
                            <span> <i class="fa fa-fax"></i></span>&nbsp; Fax :
                            <span>{{c.fax}}</span></p>
                    </div>
                    <div class="col-lg-12">
                        <a class="btn btn-sm btn-outline-secondary" style="cursor:pointer;" (click)="openModal(c)">Send Email</a>
                    </div>
                </div>
                
            </div>
            
            <h3 class="intro-text contact-header text-center">Distributors</h3>
                <div class="w3-container w3-padding, text-gray"
                     *ngFor="let c of contacts | async">
                    <div class="contact-card"
                         *ngIf="c.rank === 'distributor'" lumContact>
                        <div class="col-xs-12">
                            <h5 class="header-clean">{{c.name}}</h5>
                        </div>
                        <div class="col-xs-12">
                            <p class="detail">{{c.address}}</p>
                        </div>
                        <div class="row-padding">
                            <p class="col-xs-12">
                                <span> <i class="fa fa-phone"></i></span>&nbsp; Tel :
                                <span>{{c.phone}}</span>
                            </p>
                            <p *ngIf="c.fax">
                                <span> <i class="fa fa-fax"></i></span>&nbsp; Fax :
                                <span>{{c.fax}}</span></p>
                        </div>
                        <div class="col-lg-12">
                            <a class="btn btn-sm btn-outline-secondary" style="cursor:pointer;" (click)="openModal(c)">Send Email</a>
                        </div>
                    </div>
            </div>

            
            
            <!--Modal-->

            <div id="id01" class="w3-modal w3-animate-zoom" style="z-index: 10000;">
                <div class="w3-modal-content" style="max-width:600px;">
                    <header class="w3-container w3-dark-grey w3-padding"> 
                    <span (click)="closeModal()"
                    class="w3-button w3-display-topright">&times;</span>
                        <h5>To : {{formHeader}}</h5>
                    </header>
                    <div class="w3-container w3-padding">
                        <form [formGroup]="contactForm" novalidate (ngSubmit)="sendEmail($event)">

                            <div class="form-group" [ngClass]="{
                            'has-success': name.valid,
                             'has-danger': name.invalid && (name.dirty || name.touched)
                            }"> 
                                <!-- Name field -->
                                <!--<label class="control-label " for="name">Name</label>-->
                                <input class="form-control" id="name" name="name" type="text" placeholder="Name" formControlName="name"/>
                            </div>
                            <div class="form-control-feedback"
                                *ngIf="name.invalid && (name.dirty || name.touched)">
                                <p style="color:red;">Name is required</p>
                            </div>

                            <div class="form-group"[ngClass]="{
                            'has-success': from.valid,
                             'has-danger': from.invalid && (from.dirty || from.touched) 
                            }"> 
                            <!-- Email field -->
                                <!--<label class="control-label requiredField" for="from">Email<span class="asteriskField">*</span></label>-->
                                <input class="form-control" id="from" name="from"  placeholder="Email" type="text" formControlName="from"/>
                            </div>
                            <div class="form-control-feedback"
                                *ngIf="from.invalid && (from.dirty || from.touched)">
                                <p style="color:red;">Email is invalid.</p>
                            </div>

                            <div class="form-group" [ngClass]="{
                            'has-success': subject.valid,
                            'has-danger':  subject.invalid && (subject.dirty || subject.touched)
                            }">
                                <!-- Subject field -->
                                <!--<label class="control-label " for="subject">Subject</label>-->
                                <input class="form-control" id="subject" name="subject" type="text"  placeholder="Subject" formControlName="subject"/>
                            </div>
                            <div class="form-control-feedback"
                                *ngIf="subject.invalid && (subject.dirty || subject.touched)">
                                <p style="color:red;">Subject is required</p>
                            </div>

                            <div class="form-group" [ngClass]="{
                            'has-success': message.valid,
                            'has-danger': message.invalid && (message.dirty || message.touched)
                            }"> <!-- Message field -->
                                <!--<label class="control-label " for="message">Message</label>-->
                                <textarea class="form-control" cols="40" id="message"  placeholder="Message" name="message" rows="10" formControlName="message"></textarea>
                            </div>
                            <div class="form-control-feedback"
                                *ngIf="message.invalid && (message.dirty || message.touched)">
                                <p style="color:red;">Message is required</p>
                            </div>
                            
                            <div class="form-group">
                                <button class="btn btn-primary "name="submit" type="submit">Submit</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

        </div>
        
    `,
})
export class ContactComponent implements OnInit {

    private contactsCollection: AngularFirestoreCollection<Contact>;
    private contacts: Observable<Contact[]>;
    private action: string;
    private contactForm: FormGroup;
    private name: FormControl;
    private from: FormControl;
    private to: FormControl;
    private subject: FormControl;
    private message: FormControl;
    private formHeader: string;

    constructor(private afs: AngularFirestore, private http: Http, private flasher: FlashMessagesService) {

    }

    public ngOnInit() {
          this.contactsCollection = this.afs.collection('contacts');
          this.contacts = this.contactsCollection.valueChanges();

          this.createFormControl();
          this.createForm();
    }

    private createFormControl(){
        this.name =  new FormControl('', Validators.required);
        this.from =  new FormControl('', [
            Validators.required,
            Validators.pattern("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$")
        ]);
        this.subject = new FormControl('', [
            Validators.required,
            Validators.maxLength(100)
        ]);
        this.message = new FormControl('', [
            Validators.required,
            Validators.maxLength(400)
        ]);
        this.to = new FormControl('', [
            Validators.required,
            Validators.maxLength(50)
        ]);
    }

    private createForm(){
        this.contactForm = new FormGroup({
            name: this.name,
            from: this.from,
            to: this.to,
            subject: this.subject,
            message: this.message
        });
    }

    public openModal(c: Contact){
        let modal = document.getElementById('id01').style.display = 'block';
        this.to.setValue(c.email);
        this.action = `https://formspree.io/${c.email}`;
        this.formHeader = c.name;

    }

    public closeModal(){
        document.getElementById('id01').style.display = 'none';
    }

    public sendEmail(e){

        if(this.contactForm.valid){

            let headers = new Headers();

            // let opts = new RequestOptions();

            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            let body = new URLSearchParams();
            // body.set('username', username);
            body.append('from', this.contactForm.value.from);
            body.append('to', this.contactForm.value.to);
            body.append('name', this.contactForm.value.name);
            body.append('subject', this.contactForm.value.subject);
            body.append('message', this.contactForm.value.message);


            this.http.post('http://www.luminescenceaudio.com/sendmail', body,  { headers: headers})
                .subscribe(res => {
                    if(res.status === 200){
                        this.flasher.show("Message is sent", {cssClass: 'w3-panel w3-pale-green', timeout: 3000});
                    }else{
                        this.flasher.show("There is an error sending message. please try again later.", {cssClass: 'w3-panel w3-pale-red', timeout: 3000});
                    }
                });

        }

            this.contactForm.reset();

            this.closeModal();

    }

}
