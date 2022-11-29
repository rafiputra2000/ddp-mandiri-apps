import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  scrollToElement(element: string): void {
    document
      .querySelector(element)!
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onLoggedIn(): boolean {
    return (sessionStorage.getItem('token') !== null)
  }

  onLoggedOut(): void {
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login')
  }

}
