import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { CoursesComponent } from "./pages/courses/courses.component";
import { PagesComponent } from "./pages/pages.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { RouteGuard } from "./shared/guard/route.guard";


// const routes:Routes = [
//   {
//     path: "demo",
//     loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
//   },
//   {
//     path: "",
//     redirectTo: "/demo",
//     pathMatch: "full"
//   },
//   {
//       path: '**',
//       component: NotFoundComponent
//   }
// ]

// const routes:Routes = [
//   // {
//   //   path: "demo",
//   //   loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
//   // },
//   {
//     path: "home",
//     component: PagesComponent
//   },
//   {
//     path: "courses",
//     component: CoursesComponent
//   },
//   {
//     path: "",
//     redirectTo: "/home",
//     pathMatch: "full"
//   },
//   {
//       path: '**',
//       component: NotFoundComponent
//   }
// ]

const routes:Routes = [
  // {
  //   path: "demo",
  //   loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  // },
  {
    path: "todo",
    canActivate: [RouteGuard],
    canActivateChild: [RouteGuard],
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  // {
  //   path: "",
  //   redirectTo: "/auth/login",
  //   pathMatch: "full"
  // },
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

