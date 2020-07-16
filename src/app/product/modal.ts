import { Observable } from 'rxjs';

/**
 * Result that need to be returned to the client
 */
export interface ResultItem {
  title: string;
  tags: string[];
  imageUrl: string;
}

export interface AbstractProductFactory {
  handle: (product: Product) => ResultItem;
}

/** Expected product object from server */
export interface Product {
  id: number;
  title: string;
  categoy: string;
  categoryId: number;
  price: number;
  stock: number;
  imageUrl: string;
}

/** Expected category object from server */
export interface Category {
  id: number;
  products: number;
  name: string;
}

/**
 *  Define the interface of a DB fetcher class.
 *
 * @param connection Should be DBConnection only when fully defined.
 * @param getProducts Returns observable containing products
 *  that fetched from connection
 */
export interface Fetcher {
  connection: any | DBConnection;
  getProducts: Observable<Product[]>;
}

//TODO: Define DB connection
interface DBConnection {}
