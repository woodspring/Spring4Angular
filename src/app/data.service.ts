import { Customer } from './customer';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
  private listCustonmerUrl = 'SpringZ/list/';
  private custonmersUrl = 'http://localhost:4983/SpringZ/list/';

  constructor(private http: Http) { }

  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.custonmersUrl)
      .toPromise()
      .then(response => response.json() as Customer[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }

}
