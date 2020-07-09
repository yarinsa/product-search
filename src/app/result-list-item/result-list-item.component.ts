import { Component, OnInit, Input } from '@angular/core';
import { Product, Category, resultItem } from '../product';

@Component({
  selector: 'app-result-list-item',
  templateUrl: './result-list-item.component.html',
  styleUrls: ['./styles/result-list-item.component.scss'],
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
