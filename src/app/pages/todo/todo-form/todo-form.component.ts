import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, RouteConfigLoadEnd, Router } from '@angular/router';
import { ApiResponse } from 'src/app/shared/models/api-response.model';
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

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        const { id } = params;
        this.todoService.get(id).subscribe({
          next: (response: ApiResponse<Todo>) => {
            this.setFormValue(response.data);
          }
        })
      },
    });

  }

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    isCompleted: new FormControl(false)
  })

  onSubmit(): void {
    console.log(this.todoForm.value);
    this.todoService.save(this.todoForm.value).subscribe(() => {
      this.todoForm.reset()
      this.router.navigateByUrl('todo')
    });

  }

  setFormValue(todo: Todo): void {
    if(todo){
      this.todoForm.controls['id']?.setValue(todo.id);
      this.todoForm.controls['name']?.setValue(todo.name);
      this.todoForm.controls['isCompleted']?.setValue(todo.isCompleted);
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
