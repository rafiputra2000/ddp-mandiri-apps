import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ChildAaComponent } from './component-a/child-aa/child-aa.component';
import { ChildAbComponent } from './component-a/child-ab/child-ab.component';
import { DemoRoutingModule } from './demo-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent,
    ChildAaComponent,
    ChildAbComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    RouterModule
  ]
})
export class DemoModule { }