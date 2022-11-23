import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  declarations: [
    TodoComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class TodoModule { }
