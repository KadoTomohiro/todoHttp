import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Todo} from '../shared/model/todo';
import {switchMap, tap} from 'rxjs/operators';
import {TodoApiService} from './todo-api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoRepositoryService {

  private todo$: Subject<Todo[]>;
  private _todo: Observable<Todo[]>;

  constructor(private api: TodoApiService) { }

  fetch(): Observable<Todo[]> {
    return this.api.getAll()
      .pipe(
        switchMap(todos => {
          if (this.todo$) {
            this.todo$.next(todos);
          } else {
            this.todo$ = new BehaviorSubject(todos);
            this._todo = this.todo$.asObservable();
          }
          return this._todo;
        })
      );
  }

  getAll(): Observable<Todo[]> {
    return this.fetch();
  }

  // getById(id: string): Observable<Todo> {
  //   return this.http.get<Todo>(this.getUrlWithId(id));
  // }

  add(todo: Todo): Observable<any> {
    console.log(todo);
    return this.api.post(todo)
      .pipe(
        switchMap(() => this.fetch())
      );
  }

  update(todo: Todo): Observable<any> {
    return this.api.put(todo)
      .pipe(
        switchMap(() => this.fetch())
      );
  }

  delete(todo: Todo): Observable<any> {
    return this.api.delete(todo)
      .pipe(
        switchMap(() => this.fetch())
      );
  }
}
