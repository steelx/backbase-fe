import { Component, OnInit } from '@angular/core';
import {Transaction} from "../core/model/Transaction";
import {Observable} from "rxjs/Observable";
import {TransactionService} from "../core/services/transaction.service";

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
export class RecentTransactionsComponent implements OnInit {

  public $transactions: Observable<Transaction[]>;
  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.$transactions = this.transactionService.get();
  }

}
