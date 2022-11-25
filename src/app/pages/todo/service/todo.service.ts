import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos:Todo[] = [];
  private storage:Storage = sessionStorage;

  constructor() { }

  getAll(): Todo[] {
    const sessionTodos: string = this.storage.getItem('todos') as string;
    try{
       //Cara condisi ternary
      // const todos: Todo[] = sessionTodos
      //   ? JSON.parse(sessionTodos)
      //   : [
      //       {
      //         id: 1,
      //         name: 'Makan',
      //         isCompleted: false,
      //       },
      //     ];

      // cara kondisi if else
      if(!sessionTodos) {
        const todos: Todo[] = [
          {
          id: 1,
          name: 'Makan',
          isDone: false
        }
      ]
      this.todos = todos
      } else{
        this.todos = JSON.parse(sessionTodos)
      }
      this.setToStorage();
      return this.todos;
    }
    catch (err: any){
      return err.message;
    }

  }

  save(todo: Todo): void {
    try {
      if (todo.id) {
        this.todos = this.todos.map((t) => {
          if (t.id === todo.id) t = todo;
          return t;
        });
      } else {
        todo.id = this.todos.length + 1;
        this.todos.push(todo)
      }
      this.setToStorage();
    } catch (err: any) {
      console.error(err.message);
    }
  }

  toggleTodo(todo: Todo): void {
    try{
      console.log('todo.component.onToggleTodo:', todo)
      todo.isDone= !todo.isDone;
      this.setToStorage()
    }
    catch (err: any){
      console.error(err.message)
    }
  }

  get(id: number): Todo {
    try {
      return this.todos.find((t) => t.id === id) as Todo
    } catch (err: any){
      return err.message
    }
  }

  remove(id:number): void {
    try{
    for(let index = 0; index < this.todos.length; index++){
      console.log("index for",index);
      if(this.todos[index].id === id){
        console.log("index if", index);
        this.todos.splice(index, 1)
      }
    }
    this.setToStorage();
    } catch (err: any) {
      console.error(err.message)
    }
  }

  private setToStorage(): void {
    this.storage.setItem('todos', JSON.stringify(this.todos));
  }
}
