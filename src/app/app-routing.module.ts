import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './Login/authentification/authentification.component';
import { HomeComponent } from './Home/home/home.component';
import { ListfactureComponent } from './Home/home/listfacture/listfacture.component';
import { IntServiceComponent } from './Home/home/int-service/int-service.component';


const routes: Routes = [
  {path:'login',component:AuthentificationComponent},
  {path:'home',component:HomeComponent , children: [
   
    { path: 'factures', component: ListfactureComponent },
    {path:'Services',component:IntServiceComponent}
  ]}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
