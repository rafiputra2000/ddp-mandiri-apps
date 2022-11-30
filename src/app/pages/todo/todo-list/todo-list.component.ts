import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/shared/models/api-response.model';
import Swal from 'sweetalert2';
import { Todo } from '../model/todo.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  isLoading: boolean = false;

  constructor(private readonly todoService: TodoService, private readonly router: Router) { }

  ngOnInit(): void {
    this.onLoadTodo();
  }

  onLoadTodo(): void {
    this.isLoading = true;
    this.todoService.getAll().subscribe({
      next: (response: ApiResponse<Todo[]>) => {
        this.isLoading = false;
        this.todos = response.data;
      }
    });
  }

  onCheckTodo(todo: Todo): void {
    this.todoService.toggleTodo(todo).subscribe({});
  }

  onDeleteTodo(todo: Todo): void {
    if (todo.isCompleted) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todo sudah selesai tidak bisa dihapus!'
      })
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
          this.todoService.remove(todo.id).subscribe(() => {
            this.onLoadTodo();
          });
        }
      });
    }
  }
}
