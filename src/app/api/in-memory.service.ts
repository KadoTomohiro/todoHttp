import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Todo } from '../shared/model/todo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService {

  constructor() {
  }

  createDb(req: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const todos: Todo[] = [
      {id: 0, task: 'メールチェック', finish: false}
    ];
    return {todos};
  }

}
