import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule
  ], // untuk imports components
  exports: [], //untuk exports component
  providers: [], //untuk service
  bootstrap: [AppComponent]
})
export class AppModule { }
