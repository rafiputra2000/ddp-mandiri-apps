import { Component, OnInit } from '@angular/core';
import { TODO, Todo } from './model/todo.model';

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
    // penyebutan lembutnya adalah CASTING
    const sessionTodos: string = sessionStorage.getItem(TODO) as string;
    if (!sessionTodos){
      const todos: Todo[] = [
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
        }
      ]

      sessionStorage.setItem(TODO, JSON.stringify(todos));
      this.todos = todos
    } else {
      this.todos = JSON.parse(sessionTodos)
    }

  }

  onSaveTodo(todo: Todo): void {
    console.log('todo.component:', todo)
    todo.id = this.todos.length + 1
    this.todos.push(todo)
    sessionStorage.setItem(TODO, JSON.stringify(this.todos))
  }

  onEditTodo(todo: Todo): void {

  }

  onToggleTodo(todo: Todo): void {

  }

}
