import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../shared/model/todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {


  private _url = 'todos';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this._url);
  }

  getById(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.getUrlWithId(id));
  }

  post(todo: Todo): Observable<any> {
    return this.http.post(this._url, todo);
  }

  put(todo: Todo): Observable<any> {
    return this.http.put(this.getUrlWithId(todo.id), todo);
  }

  delete(todo: Todo): Observable<any> {
    return this.http.delete(this.getUrlWithId(todo.id));
  }

  private getUrlWithId(id: number) {
    return `${this._url}/${id}`;
  }
}
