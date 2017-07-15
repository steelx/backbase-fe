import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { MakeTransferComponent } from './make-transfer/make-transfer.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { TransactionRowComponent } from './transaction-row/transaction-row.component';
import {TransactionService} from "./core/services/transaction.service";
import { SearchFilterComponent } from './search-filter/search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    MakeTransferComponent,
    RecentTransactionsComponent,
    TransactionRowComponent,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
