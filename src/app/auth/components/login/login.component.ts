import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import Swal from 'sweetalert2';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginResponse } from '../../model/login.model';
import { ApiResponse } from 'src/app/shared/models/api-response.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private storage: Storage = sessionStorage;
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  onSubmit(): void {
    const payload = this.loginForm.value;
    this.authService.login(payload).subscribe({
      next: (response: ApiResponse<LoginResponse>) => {
        this.onSuccessLoggedIn(response)
      },
      error: (errorResponse: HttpErrorResponse) => {
        this.onErrorLoggedIn(errorResponse)
      }
    });
  }

  onSuccessLoggedIn(response: ApiResponse<LoginResponse>): void{
    const { accessToken } = response.data;
        this.storage.setItem('token', accessToken);
        this.route.queryParams.subscribe({
          next: (params: Params) => {
            const { next } = params;
            this.router.navigateByUrl(next).finally();
          },
        });
  }

  onErrorLoggedIn(errorResponse: HttpErrorResponse): void {
    if(errorResponse.status === 401) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email atau Password salah!',
      });
    }
  }

  isFormValid(loginField: string): boolean {
    const control: AbstractControl = this.loginForm.get(
      loginField
    ) as AbstractControl;
    return control && control.invalid && (control.dirty || control.touched);
  }
}
