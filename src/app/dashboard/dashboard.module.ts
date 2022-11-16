import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { FooterListComponent } from './footer/footer-list.component';
import { HighlightCardListComponent } from './highlight-card/highlight-card-list.component';
import { LinksListComponent } from './links/links-list.component';
import { NextStepsListComponent } from './next-steps/next-steps-list.component';
import { ResourcesListComponent } from './resources/resources-list.component';
import { ToolbarListComponent } from './toolbar/toolbar-list.component';


const components = [
    ToolbarListComponent,
    HighlightCardListComponent,
    ResourcesListComponent,
    NextStepsListComponent,
    LinksListComponent,
    FooterListComponent
]


@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class DashboardModule { }
