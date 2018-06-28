import {
    Component,
    OnInit,
    Directive, ElementRef, Renderer
} from '@angular/core';

@Directive({

    selector: "[lumContact]", // attatch to element as an attribute
  //   template: `
  //       <div class="contact-card col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 row">
  //           <div class="col-xs-12">
  //               <h5 ng-bind="contact.name" class="header-clean"></h5>
  //           </div>
  //           <div class="col-xs-12">
  //               <p ng-bind="contact.address" class="detail"></p>
  //           </div>
  //           <div class="col-xs-12 row">
  //               <p class="detail col-xs-5"><span> <i class="fa fa-phone"></i></span>&nbsp; Tel :</p>
  //               <p ng-bind="contact.phone | tel" class="detail col-xs-7"></p>
  //           </div>
  //           <div class="col-xs-12 row">
  //               <p class="detail col-xs-5"><span> <i class="fa fa-fax"></i></span>&nbsp; Fax :</p>
  //               <p ng-bind="contact.fax | tel" class="detail col-xs-7"></p>
  //           </div>
  //           <div class="col-lg-12"><a ui-sref="app.contact.email({sendTo:contact})" class="btn btn-primary">Email</a></div>
  //       </div>
  // `,
})
export class ContactCardDirective {
  constructor(private el: ElementRef, private renderer: Renderer){
      // this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', '#fff');
  }

}
