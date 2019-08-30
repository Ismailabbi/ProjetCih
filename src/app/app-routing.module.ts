import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './Login/authentification/authentification.component';
import { HomeComponent } from './Home/home/home.component';
import { ListfactureComponent } from './Home/home/listfacture/listfacture.component';
import { IntServiceComponent } from './Home/home/int-service/int-service.component';
import { UploadComponent } from './Home/home/upload/upload.component';
import { TableaubordComponent } from './Home/home/tableaubord/tableaubord.component';
import { ListeventComponent } from './Home/home/listevent/listevent.component';
import { FacturePrevisionComponent } from './Home/home/facture-prevision/facture-prevision.component';
import { DashbordprvComponent } from './Home/home/dashbordprv/dashbordprv.component';
import { SurfboardComponent } from './Home/home/surfboard/surfboard.component';
import { AdminbordComponent } from './Home/home/adminbord/adminbord.component';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},

  {path:'login',component:AuthentificationComponent},
  {path:'home',component:HomeComponent , children: [
    {path: '', redirectTo: 'Services',pathMatch:'full'},

   {path:'a',component:SurfboardComponent},
   {path:'adminboard',component:AdminbordComponent},
    {path:'upload',component:UploadComponent},
    { path: 'factures', component: ListfactureComponent },
    {path:'Services',component:IntServiceComponent},
    {path:'dashbord',component:TableaubordComponent},
    {path:'event',component:ListeventComponent},
    {path:'facutreprevison',component:FacturePrevisionComponent},
    {path:'dashbordprv',component:DashbordprvComponent}
  ]},
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
