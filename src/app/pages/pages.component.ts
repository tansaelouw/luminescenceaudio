import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'pages',
  template: `      
    <router-outlet></router-outlet>
  `,
})
export class PagesComponent implements OnInit {

  public ngOnInit() {
  }

}
