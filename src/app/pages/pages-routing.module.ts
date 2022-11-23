import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path: "",
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },
  // {
  //   path: "",
  //   children: [
  //     {
  //       path: "",
  //       loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  //     },
  //     {
  //       path: "",
  //       loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  //     }
  //   ]
  // }
]



@NgModule({
  imports: [RouterModule.forChild(routes)], // forRoot website utama sedangkan forChild untuk module yg lain;
  exports: [RouterModule]
  })

export class PagesRoutingModule{ }

