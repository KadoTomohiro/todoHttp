import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tdh-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  filter$: Observable<string>;
  constructor(private route: ActivatedRoute) {
    this.filter$ = this.route.queryParams
      .pipe(
        map(query => query['filter'])
      );
  }

  ngOnInit() {
  }

}
