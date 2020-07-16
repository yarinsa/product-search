import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
<<<<<<< HEAD
import { ResultItem } from '../product';
=======
import { ResultItem } from '../product/modal';
>>>>>>> d2d2d0feabb32ca2977b67aa11476d2cf0e81451

@Component({
  selector: 'app-result-list-item',
  templateUrl: './result-list-item.component.html',
  styleUrls: ['./styles/result-list-item.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [style({ opacity: 0 }), animate(600)]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave', animate(600, style({ opacity: 0 }))),
    ]),
  ],
})
export class ResultListItemComponent implements OnInit {
  isActive = false;
  @Input() result: ResultItem;

  constructor() {}

  ngOnInit(): void {}

  makeBackground(imageUrl: string) {
    return {
      'background-image': 'url(' + imageUrl + ')',
      'background-size': 'cover',
    };
  }

  onClick() {
    this.isActive = true;
  }
}
