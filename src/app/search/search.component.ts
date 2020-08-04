import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { debounce } from 'lodash';
import { ResultItem, ProductService } from '../services/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  query = '';
  results: ResultItem[] = [];

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  getProducts(): void {
    this.productService.results.subscribe((products) => {
      this.results = products;
    });
  }

  onInput() {
    if (this.query.length < 2) return;
    const onSearch = debounce(() => {
      this.productService.emitSearch(this.query);
      this.getProducts();
    }, 250);
    onSearch();
  }
}
