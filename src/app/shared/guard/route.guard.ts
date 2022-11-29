import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Params, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanActivateChild {
  constructor(private readonly router: Router){}
  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.authorize(state);
  }

  canActivateChild(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.authorize(state);
  }

  private redirect(queryParams?: Params): void {
    this.router.navigate(['auth', 'login'], { queryParams }).finally();
  }

  private authorize(state: RouterStateSnapshot): boolean {
    const params: Params = { next: state.url };
    console.log('params:', params);
    const authToken: boolean = sessionStorage.getItem('token') !== null;
    if (!authToken) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Kamu belum ada akses untuk halaman ini!',
      });
      this.redirect(params);
    }
    const menus = [
      {
        id: 1,
        name: 'todo',
        location: 'todo'
      },
      {
        id: 2,
        name: 'parent',
        location: 'component-a/child-aa'
      },
    ];
    // some -> menghasilkan boolean
    return menus.some((m) => {
      return state.url.indexOf(m.location) > -1;
    })
  }
}
