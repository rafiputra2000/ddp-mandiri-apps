import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})

export class TodoFormComponent implements OnInit {

  //Two Ways Binding
  @Input() todo!: Todo
  @Output() todoChange: EventEmitter<Todo> = new EventEmitter<Todo>()


  @Output() saveTodo: EventEmitter<Todo> = new EventEmitter<Todo>()

  constructor() { }

  ngOnChanges(): void {
    console.log(this.todo);

    this.setFormValue(this.todo);
  }

  ngOnInit(): void {
  }

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    isDone: new FormControl(false)
  })

  onSubmit(): void {
    console.log(this.todoForm.value);
    this.todoChange.emit(this.todoForm.value);
    this.todoForm.reset()
  }

  setFormValue(todo: Todo): void {
    if(todo){
      this.todoForm.controls['id']?.setValue(todo.id);
      this.todoForm.controls['name']?.setValue(todo.name);
      this.todoForm.controls['isDone']?.setValue(todo.isDone);
    }
  }

  //getter
  // tambahkan ! untuk memberikan kesan getter name
  // di bawah tidak akan null
  get name() { return this.todoForm.get('name')!}

  // isFormValid(todoField: string): string {
  //   const control: AbstractControl = this.todoForm.get(todoField) as AbstractControl
  //   let className = ''
  //   if(control && control.invalid && (control.dirty || control.touched)) {
  //     className = 'is-invalid'
  //   } else if (control && control.valid && (control.dirty || control.touched)) {
  //     className = 'is-valid'
  //   }
  //   return className
  // }

  // ini pasti akan bernilai true
  isFormValid(todoField: string): boolean {
    const control: AbstractControl = this.todoForm.get(todoField) as AbstractControl;
    return (control && control.invalid && (control.dirty || control.touched))
  }
}
