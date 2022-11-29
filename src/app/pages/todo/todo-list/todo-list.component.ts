import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = []
  isLoading: boolean = true;

  constructor(private readonly todoService: TodoService) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.onLoadTodo()
    // }, 5000);
    this.onLoadTodo()
  }

  onLoadTodo(): void {
    this.isLoading = false
    this.todoService.getAll().subscribe({
      next: (todos: Todo[]) => {
        this.todos = todos;
      }
    });
  }

  onCheckTodo(todo: Todo): void {
    this.todoService.toggleTodo(todo)
  }

  onDeleteTodo(todo:Todo): void {
    this.todoService.remove(todo.id)
  }

  onEditTodo(todo:Todo): void {
    // this.todoService.get(todo.id)

  }
}
