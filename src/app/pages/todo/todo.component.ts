import { Component, OnInit } from '@angular/core';
import { Todo } from './model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = []

  constructor() { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todos = [
      {
        id: 1,
        name: 'Makan',
        isDone: false
      },
      {
        id: 2,
        name: 'Minum',
        isDone: true
      },
      {
        id: 3,
        name: 'Mandi',
        isDone: true
      },
      {
        id: 4,
        name: 'Ngoding',
        isDone: true
      },
    ]
  }

  onEditTodo(todo: Todo): void {

  }

  onToggleTodo(todo: Todo): void {

  }

  onSaveTodo(todo: Todo): void {
    // todo.name =

  }

}
