import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';

const routes:Routes = [
  // {
  //   path: "demo",
  //   loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  // },
  {
    path: "courses",
    component: CoursesComponent
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)], // forRoot website utama sedangkan forChild untuk module yg lain;
  exports: [RouterModule]
  })

export class CoursesRoutingModule{ }

