import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormModule } from './todo-form/todo-form.module';
import { TodoListModule } from './todo-list/todo-list.module';
import { TodoRoutingModule } from './todo-routing.module';



@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoFormModule,
    TodoListModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
