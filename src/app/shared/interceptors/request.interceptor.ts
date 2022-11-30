import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private readonly router: Router
  ) { }

  handleError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 401 || error.status === 403) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Sesi anda sudah habis',
      });
      this.router.navigateByUrl('/auth/login')
    }
    return throwError(() => new Error(error.message));
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = sessionStorage.getItem('token') as string;
    if (token) {
      const newRequest: any = request.clone();
      newRequest.headers = request.headers.set('Authorization', `Bearer ${token}`);
      return next.handle(newRequest).pipe(
        catchError(err => this.handleError(err))
      );
    } else {
      return next.handle(request).pipe(
        catchError(err => this.handleError(err))
      );
    }
  }
}
