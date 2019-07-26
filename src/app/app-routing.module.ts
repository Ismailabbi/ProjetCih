import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './Login/authentification/authentification.component';
import { HomeComponent } from './Home/home/home.component';


const routes: Routes = [
  {path:'login',component:AuthentificationComponent},
  {path:'home',component:HomeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
