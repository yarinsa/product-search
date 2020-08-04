import { Injectable } from '@angular/core';
import { ResultItem } from '../product/model';
import { BehaviorSubject } from 'rxjs';
import { IpcRenderer } from 'electron';

const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  results = new BehaviorSubject<ResultItem[]>([]);
  private ipc: IpcRenderer;

  constructor() {
    electron.ipcRenderer.on('search-products-reply', (event, results) => {
      this.results.next(results);
    });
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('App not running inside Electron!');
    }
  }

  get results$() {
    return this.results;
  }

  public emitSearch = (query: string) => {
    this.ipc.send('search-products', [query]);
  };
}
