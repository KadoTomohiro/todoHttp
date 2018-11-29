import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../shared/model/todo';
import { TodoRepositoryService } from '../todo-repository.service';

@Component({
  selector: 'tdh-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  constructor(private repo: TodoRepositoryService) { }

  ngOnInit() {
  }

  onChecked() {
    this.repo.put(this.todo).subscribe();
  }

  onDelete() {
    this.repo.delete(this.todo).subscribe();
  }

}
