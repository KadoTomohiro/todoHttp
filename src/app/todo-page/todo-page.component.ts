import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {FilterType} from '../shared/model/filter-type';

@Component({
  selector: 'tdh-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  filter$: Observable<FilterType>;
  constructor(private route: ActivatedRoute) {
    this.filter$ = this.route.queryParams
      .pipe(
        map(query => query['filter'])
      );
  }

  ngOnInit() {
  }

}
