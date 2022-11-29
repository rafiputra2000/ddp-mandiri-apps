import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { LoginComponent } from "./components/login/login.component";

const routes:Routes = [
  {
    path: "login",
    component: LoginComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)], // forRoot website utama sedangkan forChild untuk module yg lain;
  exports: [RouterModule]
  })

export class AuthRoutingModule{ }

