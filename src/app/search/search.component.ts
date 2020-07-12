import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category, Product, resultItem } from '../product';
import { ProductService } from '../product.service';
import { debounce } from 'lodash';
import { concat } from 'rxjs';
import { concatMap } from 'rxjs/internal/operators';
import { delay } from 'rxjs/internal/operators';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  query = '';
  categories: Category[];
  results: resultItem[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.productService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  getProducts(): void {
    this.productService
      .getProducts(this.query)
      .subscribe(
        (products) =>
          (this.results = products.map((product) => this.handle(product)))
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

  /**
   * Handle function to convert
   * product item to search result item.
   * Handles each product according to his category
   * @param product
   */
  handle(product: Product): resultItem {
    let categoriesMap = new Map();
    categoriesMap.set('Toys', this._handleToy);
    categoriesMap.set('Computers', this._handleComputers);
    return categoriesMap.has(product.categoy)
      ? categoriesMap.get(product.categoy)(product)
      : this._handleAll(product);
  }

  /**
   * Default handler - handle all product categories
   * return result item when the tags are the letters
   * combining the title reversed.
   * @param product  - Product item from api
   */
  _handleAll(product: Product): resultItem {
    return {
      imageUrl: product.imageUrl,
      title: product.title,
      tags: product.title.split('').reverse(),
    };
  }

  /**
   * Computers category handler
   * return result item when the tags
   * are the words combining the title.
   * @param product  - produce item from api
   */
  _handleComputers(product: Product): resultItem {
    return {
      imageUrl: product.imageUrl,
      title: product.title,
      tags: product.title.split(' '),
    };
  }

  /**
   * Toys category handler
   * return result item when the tags are the price
   * @param product - produce item from api
   */
  _handleToy(product: Product): resultItem {
    let tags = [];
    tags.push(product.price);
    return {
      imageUrl: product.imageUrl,
      title: product.title,
      tags: tags,
    };
  }
}
