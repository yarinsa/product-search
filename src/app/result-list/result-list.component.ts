import { Component, OnInit, Input } from '@angular/core';
import { resultItem } from '../product';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent implements OnInit {
  @Input() results: resultItem[];
  constructor() {
    this.results = [];
  }

  ngOnInit(): void {}
}
