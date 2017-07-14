import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from "../core/model/Transaction";

@Component({
  selector: 'app-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.css']
})
export class TransactionRowComponent implements OnInit {

  @Input() transactions: Transaction[];
  constructor() { }

  ngOnInit() {
  }

}
