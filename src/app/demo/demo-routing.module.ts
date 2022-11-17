import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChildAaComponent } from "./component-a/child-aa/child-aa.component";
import { ChildAbComponent } from "./component-a/child-ab/child-ab.component";
import { ComponentAComponent } from "./component-a/component-a.component";
import { ComponentBComponent } from "./component-b/component-b.component";

const routes:Routes = [
  {
    path: "component-a",
    component: ComponentAComponent,
    children: [
      {
        //Eager Loading
        // Eager Loading digunakan ketika component tidak ada component didalamnya lagi
        // Lazy Loading digunakan untuk kompleksitas jika ada component didalam component
        path: "child-aa",
        component: ChildAaComponent
      },
      {
        path: "child-ab",
        component:ChildAbComponent
      }
    ]
  },
  {
    path: "component-b",
    component: ComponentBComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)], // forRoot website utama sedangkan forChild untuk module yg lain;
  exports: [RouterModule]
  })

export class DemoRoutingModule{ }
