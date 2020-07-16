<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { debounce } from 'lodash';
import { ResultItem, ProductService } from '../product';
=======
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { debounce } from 'lodash';
import { concat } from 'rxjs';
import { concatMap } from 'rxjs/internal/operators';
import { delay } from 'rxjs/internal/operators';
import { from, of } from 'rxjs';
import { ResultItem, Category } from '../product/modal';
import { ProductService } from '../product/product.service';
>>>>>>> d2d2d0feabb32ca2977b67aa11476d2cf0e81451

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  query = '';
<<<<<<< HEAD
=======
  categories: Category[];
>>>>>>> d2d2d0feabb32ca2977b67aa11476d2cf0e81451
  results: ResultItem[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  getProducts(): void {
    this.productService.getResults(this.query).subscribe(
      (products) => (this.results = products),
<<<<<<< HEAD
      (error) => console.error('HTTP request failed:', error),
=======
      (error) => console.log(error),
>>>>>>> d2d2d0feabb32ca2977b67aa11476d2cf0e81451
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
