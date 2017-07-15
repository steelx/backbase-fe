import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {filters} from "../transaction-row/transaction-row.component";

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  @ViewChild('amount') amount;
  @ViewChild('beneficiaries') beneficiaries;
  @ViewChild('date') date;

  @Output() onSearch = new EventEmitter();
  @Output() onFilter = new EventEmitter();

  public sortByDate = true;
  public sortByBeneficiaries = false;
  public sortByAmount = false;
  public keyUpSubject = new Subject<string>();

  constructor() {
  }

  ngOnInit() {
    const onKeyUpEvent = this.keyUpSubject
      .debounceTime(250)
      .distinctUntilChanged()
      .flatMap((search) => {
        return Observable.of(search).delay(100);
      })
      .subscribe((value) => {
        this.onSearch.emit(value);
      });

    this.handleSort(1);
  }

  filter(val) {
    this.handleSort(val);
    this.onFilter.emit(val);
  }

  removeClass() {
    this.amount.nativeElement.className = '';
    this.date.nativeElement.className = '';
    this.beneficiaries.nativeElement.className = '';
  }

  handleSort(type) {
    this.removeClass();
    switch (type) {
      case filters.date:
        this.sortByDate = !this.sortByDate;
        this.date.nativeElement.className = (this.sortByDate ? 'up' : 'down') + ' active';
        break;

      case filters.beneficiaries:
        this.sortByBeneficiaries = !this.sortByBeneficiaries;
        this.beneficiaries.nativeElement.className = (this.sortByBeneficiaries ? 'up' : 'down') + ' active';
        break;

      case filters.amount:
        this.sortByAmount = !this.sortByAmount;
        this.amount.nativeElement.className = (this.sortByAmount ? 'up' : 'down') + ' active';
        break;
    }
  }

}
