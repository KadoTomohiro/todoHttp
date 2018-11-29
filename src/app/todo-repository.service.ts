import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Todo } from './shared/model/todo';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoRepositoryService {

  private todo$: Subject<Todo[]>;
  private _todo: Observable<Todo[]>;

  private _url = '/api/todos';
  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get<Todo[]>(this._url)
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
    return this._todo || this.fetch();
  }

  // getById(id: string): Observable<Todo> {
  //   return this.http.get<Todo>(this.getUrlWithId(id));
  // }

  post(todo: Todo): Observable<any> {
    return this.http.post(this._url, todo)
      .pipe(
        switchMap(() => this.fetch())
      );
  }

  put(todo: Todo): Observable<any> {
    return this.http.put(this.getUrlWithId(todo.id), todo)
      .pipe(
        switchMap(() => this.fetch())
      );
  }

  delete(todo: Todo): Observable<any> {
    return this.http.delete(this.getUrlWithId(todo.id))
      .pipe(
        switchMap(() => this.fetch())
      );
  }

  private getUrlWithId(id: number) {
    return `${this._url}/${id}`;
  }

  getFilterValue(filter: string): boolean {
    return filter !== 'open';
  }
}
