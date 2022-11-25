import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, RouteConfigLoadEnd, Router } from '@angular/router';
import { Todo } from '../model/todo.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})

export class TodoFormComponent implements OnInit {

  todo! : Todo;

  constructor(private readonly todoService: TodoService, private readonly route: ActivatedRoute, private readonly router: Router) { }

  // ngOnChanges(): void {
  //   // console.log(this.todo);

  //   // this.setFormValue(this.todo);
  // }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        const { id } = params;
        // +id ini menjadikan yang string -> number
        // berlaku untuk bilangan bulat
        this.todo = this.todoService.get(+id);
        this.setFormValue(this.todo)
      }
    })

  }

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    isDone: new FormControl(false)
  })

  onSubmit(): void {
    console.log(this.todoForm.value);
    this.todoService.save(this.todoForm.value).subscribe();
    this.todoForm.reset()
    this.router.navigateByUrl('todo')
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
  // get name() { return this.todoForm.get('name')!}

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
