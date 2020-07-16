import { Component, OnInit } from '@angular/core';
import { debounce } from 'lodash';
import { ResultItem, ProductService } from '../product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  query = '';
  results: ResultItem[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  getProducts(): void {
    this.productService.getResults(this.query).subscribe(
      (products) => (this.results = products),
      (error) => console.error('HTTP request failed:', error),
      () => console.log('HTTP request complete')
    );
  }

  onInput() {
    if (this.query.length < 2) return;
    const getProducts = debounce(() => {
      this.getProducts();
    }, 250);
    getProducts();
  }
}
