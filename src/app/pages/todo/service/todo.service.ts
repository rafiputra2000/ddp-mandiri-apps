import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/api-response.model';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private readonly http: HttpClient) {}
  private baseUrl: string = '/api/v1/todos';

  // headers: Authorization: Bearer token
  getAll(): Observable<ApiResponse<Todo[]>> {
    try {
      const headers = this.setHeaders();
      return this.http.get<ApiResponse<Todo[]>>(this.baseUrl, { headers });
    } catch (error: any) {
      return error.message;
    }
  }

  save(todo: Todo): Observable<ApiResponse<Todo>> {
    try {
      const headers = this.setHeaders();
      if (todo.id) {
        return this.http.put<ApiResponse<Todo>>(this.baseUrl, todo, {
          headers,
        });
      }
      return this.http.post<ApiResponse<Todo>>(this.baseUrl, todo, { headers });
    } catch (error: any) {
      return error.message;
    }
  }

  get(id: string): Observable<ApiResponse<Todo>> {
    try {
      const headers = this.setHeaders();
      return this.http.get<ApiResponse<Todo>>(`${this.baseUrl}/${id}`, {
        headers,
      });
    } catch (error: any) {
      return error.message;
    }
  }

  remove(id: string): Observable<ApiResponse<string>> {
    try {
      const headers = this.setHeaders();
      return this.http.delete<ApiResponse<string>>(`${this.baseUrl}/${id}`, {
        headers,
      });
    } catch (error: any) {
      return error.message;
    }
  }

  toggleTodo(todo: Todo): Observable<void> {
    try {
      const headers = this.setHeaders();
      todo.isCompleted = !todo.isCompleted;
      const { id, name, isCompleted } = todo;
      return this.http.put<void>(
        this.baseUrl,
        { id, name, isCompleted },
        { headers }
      );
    } catch (error: any) {
      return error.message;
    }
  }

  private setHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token') as string;
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
}
