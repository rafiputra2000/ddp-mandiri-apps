import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes:Routes = [
  // {
  //   path: "demo",
  //   loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  // },
  {
    path: "",
    component: HomeComponent
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)], // forRoot website utama sedangkan forChild untuk module yg lain;
  exports: [RouterModule]
  })

export class HomeRoutingModule{ }

