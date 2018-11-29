import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoRepositoryService } from '../todo-repository.service';
import { Observable } from 'rxjs';
import { Todo } from '../shared/model/todo';

@Component({
  selector: 'tdh-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() filter: 'open' | 'close' | undefined;
  todos$: Observable<Todo[]>;

  constructor(private repo: TodoRepositoryService) {
  }

  ngOnInit() {
    this.todos$ = this.repo.getAll();
  }

  filtering(finish: boolean) {
    if (!this.filter) {
      return true;
    }

    return (this.filter === 'open' && !finish) || (this.filter === 'close' && finish);
  }

}
