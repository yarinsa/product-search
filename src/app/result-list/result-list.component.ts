import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { resultItem } from '../product';
import {
  trigger,
  transition,
  query,
  stagger,
  style,
  animate,
} from '@angular/animations';

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
  @Input() results: resultItem[];

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

const results = [
  {
    imageUrl: 'https://picsum.photos/400?image=59',
    title: 'Ergonomic Granite Pizza',
    tags: Array(23),
  },
  {
    imageUrl: 'https://picsum.photos/400?image=188',
    title: 'Rustic Rubber Pizza',
    tags: Array(19),
  },
  {
    imageUrl: 'https://picsum.photos/400?image=365',
    title: 'Awesome Concrete Pizza',
    tags: Array(1),
  },
  {
    imageUrl: 'https://picsum.photos/400?image=178',
    title: 'Handmade Cotton Pizza',
    tags: Array(21),
  },
  {
    imageUrl: 'https://picsum.photos/400?image=967',
    title: 'Handmade Fresh Pizza',
    tags: Array(20),
  },
  {
    imageUrl: 'https://picsum.photos/400?image=729',
    title: 'Rustic Frozen Pizza',
    tags: Array(3),
  },
  {
    imageUrl: 'https://picsum.photos/400?image=30',
    title: 'Rustic Soft Pizza',
    tags: Array(17),
  },
  {
    imageUrl: 'https://picsum.photos/400?image=278',
    title: 'Refined Frozen Pizza',
    tags: Array(20),
  },
  {
    imageUrl: 'https://picsum.photos/400?image=418',
    title: 'Gorgeous Steel Pizza',
    tags: Array(20),
  },
  {
    imageUrl: 'https://picsum.photos/400?image=733',
    title: 'Gorgeous Fresh Pizza',
    tags: Array(20),
  },
  {
    imageUrl: 'https://picsum.photos/400?image=787',
    title: 'Handmade Frozen Pizza',
    tags: Array(21),
  },
];
