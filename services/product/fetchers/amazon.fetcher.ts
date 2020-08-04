import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Category, Product } from '../model';
import { ProductFetcher } from './fetcher';
import { Injectable } from '@angular/core';
import { AMAZON_END_POINTS } from './config';
import { net } from 'electron';
import { reject } from 'lodash';

export class AmazonProductFetcher implements ProductFetcher {
  constructor() {}

  getProducts = (query: string) => {
    return new Observable<Product[]>((subscribe) => {
      this.makeRequest(query)
        .then((results) => {
          subscribe.next(results);
        })
        .catch((error) => subscribe.error(error))
        .finally(() => subscribe.complete());
    });
  };

  makeRequest = async (query: string) => {
    return new Promise<any>((resolve, reject) => {
      const request = net
        .request(
          `https://pcsa57ebsj.execute-api.us-east-1.amazonaws.com/api/products/search?query=${query}`
        )
        .on('response', (response) => {
          response.on('data', (chunk) => {
            let result = JSON.parse(chunk.toString());
            resolve(result);
          });
        })
        .on('error', (error) =>
          reject('There was problem fetching data ' + error)
        );
      request.end();
    });
  };
}
