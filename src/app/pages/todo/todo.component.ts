import { Component, OnInit } from '@angular/core';
import { TODO, Todo } from './model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = []
  private _todo!: Todo;
  isLoading: boolean = true;

  constructor() { }

  //Getter Setter
  get todo(): Todo { return this._todo as Todo}
  set todo(todo:Todo){
    this.onSaveTodo(todo)
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadTodos();
    },5000)
  }

  loadTodos(): void {
    this.isLoading= false;
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
    if(todo.id){
      this.todos = this.todos.map((t) => {
        if (t.id === todo.id) t = todo;
        return t
      });
    } else {
      console.log('todo.component:', todo)
      todo.id = this.todos.length + 1
      this.todos.push(todo)
      sessionStorage.setItem(TODO, JSON.stringify(this.todos))
    }
  }

  onToggleTodo(todo: Todo): void {
    console.log('todo.component.onToggleTodo:', todo)
    sessionStorage.setItem(TODO, JSON.stringify(this.todos))

  }

  onDeleteTodo(todo: Todo): void {
    console.log("todoDELETE", todo);
    for(let index = 0; index < this.todos.length; index++){
      console.log("index for",index);
      if(this.todos[index].id === todo.id){
        console.log("index if", index);
        this.todos.splice(index, 1)
      }
    }
    sessionStorage.setItem(TODO, JSON.stringify(this.todos))
  }

  onEditTodo(todo: Todo): void {
    this._todo = todo;
  }
}
