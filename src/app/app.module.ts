import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesModule } from './pages/courses/courses.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { DemoModule } from './demo/demo.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,

  ], // untuk imports components
  exports: [], //untuk exports component
  providers: [], //untuk service
  bootstrap: [AppComponent]
})
export class AppModule { }
