import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './todo-form.component';



@NgModule({
  declarations: [TodoFormComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TodoFormComponent
  ]
})
export class TodoFormModule { }
