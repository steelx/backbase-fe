import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Transaction} from "../model/Transaction";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TransactionService {

  constructor(private _http: Http) { }

  get(): Observable<Transaction[]> {
    return this._http.get('assets/transactions.json')
      .map(res => res.json().data)
      .do(console.log);
  }
}
