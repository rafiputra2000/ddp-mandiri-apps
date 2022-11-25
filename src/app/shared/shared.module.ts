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
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';
import { StringUtil } from './utils/string.utils';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    HighlightDirective,
    BsButtonDirective,
    DateCustomPipe,
    BadgeCustomPipe,
    ValidationMessageComponent
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
    BadgeCustomPipe,
    ValidationMessageComponent
  ],
  providers: [StringUtil]
})
export class SharedModule { }
