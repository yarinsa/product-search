import { Component, OnInit, Input } from '@angular/core';
import { Product, Category, resultItem } from '../product';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

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
  @Input() result: resultItem;

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
