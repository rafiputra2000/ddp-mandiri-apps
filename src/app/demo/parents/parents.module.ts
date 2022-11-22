import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentsComponent } from './parents.component';



@NgModule({
  declarations: [
    ParentsComponent,
    ChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParentsComponent,
    ChildComponent
  ]
})
export class ParentsModule { }
