import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";


const routes:Routes = [
  {
    path: "demo",
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: "",
    redirectTo: "/demo",
    pathMatch: "full"
  },
  {
      path: '**',
      component: NotFoundComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot website utama sedangkan forChild untuk module yg lain;
  exports: [RouterModule]
  })

export class AppRoutingModule{ }

