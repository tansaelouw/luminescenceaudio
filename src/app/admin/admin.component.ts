
import {
  Component,
  OnInit
} from '@angular/core';

import { Title } from './title';

// import fade in animation
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'admin',  // <home></home>
  providers: [
  ],
  styles: [ `` ],
  templateUrl: './admin.component.html',
    animations: [fadeInAnimation],
})
export class AdminComponent implements OnInit {


  constructor(
  ) {}

  public ngOnInit() {
  }
}
