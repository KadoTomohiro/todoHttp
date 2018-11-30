import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {FilterType, FilterTypeName} from '../shared/model/filter-type';

@Component({
  selector: 'tdh-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  currentFilter: FilterType;
  filters: {filter: FilterType, label: string}[] = [
    {filter: FilterTypeName.OPEN, label: 'Open'},
    {filter: FilterTypeName.CLOSE, label: 'Close'},
    {filter: FilterTypeName.ALL, label: 'All'},
  ]

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams
      .pipe(
        map(param => param['filter'])
      )
      .subscribe((filter: FilterType) => this.currentFilter = filter);
  }

  isActive(filter: FilterType) {
    return this.currentFilter === filter;
  }

}
