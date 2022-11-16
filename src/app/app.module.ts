import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule
  ], // untuk imports components
  exports: [], //untuk exports component
  providers: [], //untuk service
  bootstrap: [AppComponent]
})
export class AppModule { }
