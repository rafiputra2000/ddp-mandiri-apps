import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directive/highlight.directive';
import { BsButtonDirective } from './directive/bs-button.directive';
import { DateCustomPipe } from './pipes/date-custom.pipe';
import { BadgeCustomPipe } from './pipes/badge-custom.pipe';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    HighlightDirective,
    BsButtonDirective,
    DateCustomPipe,
    BadgeCustomPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    HighlightDirective,
    BsButtonDirective,
    DateCustomPipe,
    BadgeCustomPipe
  ]
})
export class SharedModule { }
