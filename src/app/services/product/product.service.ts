import { Injectable } from '@angular/core';
import { ResultItem } from '../product/model';
import { BehaviorSubject } from 'rxjs';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  results = new BehaviorSubject<ResultItem[]>([]);

  constructor(private _electronService: ElectronService) {}

  get results$() {
    return this.results;
  }

  public emitSearch = (query: string) => {
    return this._electronService.isElectronApp
      ? this._electronService.ipcRenderer
          .invoke('search-products', query)
          .then((results) => {
            this.results.next(results);
          })
      : null;
  };
}
