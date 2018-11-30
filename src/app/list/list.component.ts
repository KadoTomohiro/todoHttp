import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoRepositoryService } from '../core/todo-repository.service';
import { Observable } from 'rxjs';
import { Todo } from '../shared/model/todo';
import {FilterType, FilterTypeName} from '../shared/model/filter-type';

@Component({
  selector: 'tdh-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() filter: FilterType;
  todos$: Observable<Todo[]>;

  constructor(private repo: TodoRepositoryService) {
  }

  ngOnInit() {
    this.todos$ = this.repo.getAll();
  }

  filtering(finish: boolean) {
    return this.filter === FilterTypeName.ALL ||
      (this.filter === FilterTypeName.OPEN && !finish) ||
      (this.filter === FilterTypeName.CLOSE && finish);
  }

}
