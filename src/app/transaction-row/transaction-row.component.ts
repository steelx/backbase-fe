import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from "../core/model/Transaction";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.css']
})
export class TransactionRowComponent implements OnInit {

  public transactionsLog;
  private transactionsBak;
  @Input('transactions')
  set transactions(value: Transaction[]) {
    this.transactionsLog = this.transactionsBak = value;
  }
  constructor() {
  }

  ngOnInit() {
  }

  handleSearch(term) {
    this.transactionsLog = this.transactionsBak;
    if (term.length === 0) {
      return;
    }
    this.transactionsLog = this.transactionsLog.filter(obj => obj.merchant.toLowerCase().indexOf(term.toLowerCase()) !== -1);
  }

}
