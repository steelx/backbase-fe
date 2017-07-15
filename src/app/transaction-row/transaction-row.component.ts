import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from "../core/model/Transaction";
export enum filters {
  date = 1 ,
  beneficiaries = 2,
  amount = 3
}

@Component({
  selector: 'app-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.css']
})
export class TransactionRowComponent implements OnInit {

  public sortByDate = true;
  public sortByBeneficiaries = false;
  public sortByAmount = false;
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

  handleSort(type) {
    switch (type) {
      case filters.date:
        this.handleSortDate();
        break;

      case filters.beneficiaries:
        this.handleSortBeneficiaries();
        break;

      case filters.amount:
        this.handleSortDate();
        break;
    }
  }

  handleSortDate() {
    this.sortByDate = !this.sortByDate;
    this.transactionsLog = this.transactionsLog.sort((logA: Transaction, logB: Transaction) => {
      if (this.sortByDate) {
        return logB.transactionDate - logA.transactionDate;
      } else {
        return logA.transactionDate - logB.transactionDate;
      }
    });
  }

  handleSortBeneficiaries() {
    this.sortByBeneficiaries = !this.sortByBeneficiaries;
    this.transactionsLog = this.transactionsLog.sort((a, b) => {
      if (this.sortByBeneficiaries) {
        return a.merchant < b.merchant;
      } else {
        return a.merchant > b.merchant;
      }
    });
  }

  handleSortAmount() {
    this.sortByAmount = !this.sortByAmount;
    this.transactionsLog = this.transactionsLog.sort((a, b) => {
      if (this.sortByAmount) {
        return a.amount < b.amount;
      } else {
        return a.amount > b.amount;
      }
    });
  }

}
