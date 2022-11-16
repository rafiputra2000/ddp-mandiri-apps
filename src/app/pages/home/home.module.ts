import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { InstructorComponent } from './instructor/instructor.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';
import { CoursesComponent } from './courses/courses.component';



@NgModule({
  declarations: [
    BannerComponent,
    NewsletterComponent,
    ServiceComponent,
    AboutComponent,
    FaqComponent,
    InstructorComponent,
    ContactComponent,
    HomeComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    NewsletterComponent,
    ServiceComponent,
    AboutComponent,
    FaqComponent,
    InstructorComponent,
    ContactComponent,
    HomeComponent
  ]
})
export class HomeModule { }
