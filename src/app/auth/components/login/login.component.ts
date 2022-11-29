import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginResponse } from '../../model/login.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  onSubmit(): void {
    const payload = this.loginForm.value;
    this.authService.login(payload).subscribe({
      next: (token: LoginResponse | null) => {
        if (token) this.router.navigateByUrl('todo')
        else {
          Swal.fire({
            icon: 'error',
            title: 'Opps',
            text: 'Email atau Password salah'
          })
        }
      }
    })
  }

  isFormValid(loginField: string): boolean {
    const control: AbstractControl = this.loginForm.get(
      loginField
    ) as AbstractControl;
    return control && control.invalid && (control.dirty || control.touched);
  }

}
