import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  @Output() onSearch = new EventEmitter();

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
        console.log(value);
        this.onSearch.emit(value);
      });
  }

}
