import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
