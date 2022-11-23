import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[] = []

  constructor() { }
  @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter<Todo>()


  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>()

  ngOnInit(): void {
  }

  onCheckTodo(todo: Todo): void {
    todo.isDone = !todo.isDone
    console.log('todo', todo)
    this.toggleTodo.emit(todo)
  }

  onDeleteTodo(todo:Todo): void {
    console.log(todo);
    this.deleteTodo.emit(todo)
  }
}
