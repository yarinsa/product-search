import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { debounce } from 'lodash';
import { concat } from 'rxjs';
import { concatMap } from 'rxjs/internal/operators';
import { delay } from 'rxjs/internal/operators';
import { from, of } from 'rxjs';
import { ResultItem, Category } from '../product/modal';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  query = '';
  categories: Category[];
  results: ResultItem[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  getProducts(): void {
    this.productService.getResults(this.query).subscribe(
      (products) => (this.results = products),
      (error) => console.log(error),
      () => console.log('HTTP request complete')
    );
  }

  onInput() {
    if (this.query.length < 2) return;
    const getProducts = debounce(() => {
      this.results = [];
      this.getProducts();
      console.log(this.results);
    }, 250);
    getProducts();
  }
}
