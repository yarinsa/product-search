import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {
  trigger,
  transition,
  query,
  stagger,
  style,
  animate,
} from '@angular/animations';
import { ResultItem } from '../services/product';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
  animations: [
    trigger('stagger', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(50, [
              animate(
                '0.2s',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [stagger(50, [animate('0.15s', style({ opacity: 0 }))])],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ResultListComponent implements OnInit {
  @Input() results: ResultItem[];

  constructor() {}

  ngOnInit(): void {
    this.results = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    //animation is based on the results array length.
    this.results = [];
    changes.results.currentValue.map((result) => this.results.push(result));
  }
}
