import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() saveTodo: EventEmitter<Todo> = new EventEmitter<Todo>()

  constructor() { }

  ngOnInit(): void {
  }

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    isCompleted: new FormControl(false)
  })

  onSubmit(): void {
    console.log(this.todoForm.value);
    this.saveTodo.emit(this.todoForm.value);
    this.todoForm.reset()
  }

}
