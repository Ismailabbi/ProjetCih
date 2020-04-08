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
import { TableaumontantComponent } from './Home/home/tableaumontant/tableaumontant.component';
import { SurfaceprvComponent } from './Home/home/surfaceprv/surfaceprv.component';
import { TablaumontantpComponent } from './Home/home/tablaumontantp/tablaumontantp.component';
import { ComparaisonAComponent } from './Home/home/comparaison-a/comparaison-a.component';
import { CompprvComponent } from './Home/home/compprv/compprv.component';
import { RapprochementComponent } from './Home/home/rapprochement/rapprochement.component';
import { VisafactureComponent } from './Home/home/visafacture/visafacture.component';
import { AccueilComponent } from './Home/home/accueil/accueil.component';
import { FluxtableComponent } from './Home/home/fluxtable/fluxtable.component';
import { VueGeneralComponent } from './Home/home/Visa/vue-general/vue-general.component';
import { TypeBaseComponent } from './Home/home/Visa/type-base/type-base.component';
import { LitigesComponent } from './Home/home/Visa/litiges/litiges.component';
import { TypesdeTransactionsComponent } from './Home/home/Visa/typesde-transactions/typesde-transactions.component';
import { UploadvisaComponent } from './Home/home/Visa/uploadvisa/uploadvisa.component';
import { FluxvisaComponent } from './Home/home/Visa/fluxvisa/fluxvisa.component';
import { DomainechartComponent } from './Home/home/Visa/domainechart/domainechart.component';
import { SurfacevisaComponent } from './Home/home/Visa/surfacevisa/surfacevisa.component';
import { VentilationvisaComponent } from './Home/home/Visa/ventilationvisa/ventilationvisa.component';
import { ComparaisonvisaComponent } from './Home/home/Visa/comparaisonvisa/comparaisonvisa.component';
import { RapprochementvisaComponent } from './Home/home/Visa/rapprochementvisa/rapprochementvisa.component';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},

  {path:'login',component:AuthentificationComponent},
  {path:'home',component:HomeComponent , children: [
    {path: '', redirectTo: 'Services',pathMatch:'full'},
    {path:'Acceuil',component:AccueilComponent},
    {path:'domainevisa',component:DomainechartComponent},
    {path:'Surfacevisa',component:SurfacevisaComponent},
    {path:'flux',component:FluxtableComponent},
    {path:'uploadvisa',component:UploadvisaComponent},
    {path:'Ventilation',component:TableaumontantComponent},
    {path:'comparaison',component:ComparaisonAComponent},
     {path:'ac',component:AccueilComponent},
   {path:'Evolution',component:SurfboardComponent},
   {path:'rapprochement',component:RapprochementComponent},
   {path:'EvolutionPrevisionnel',component:SurfaceprvComponent},
   {path:'VentilationPrevisionnel',component:TablaumontantpComponent},
   {path:'adminboard',component:AdminbordComponent},
    {path:'upload',component:UploadComponent},
    {path:'visa',component:VisafactureComponent},
    { path: 'factures', component: ListfactureComponent },
    {path:'Services',component:IntServiceComponent},
    {path:'Domaine',component:TableaubordComponent},
    {path:'event',component:ListeventComponent},
    {path:'facutreprevison',component:FacturePrevisionComponent},
    {path:'DomainePrevisionnel',component:DashbordprvComponent},
    {path:'comparaisonprv',component:CompprvComponent},
    {path:'vuegenerale',component:VueGeneralComponent},
    {path:'typebase',component:TypeBaseComponent},
    {path:'litiges',component:LitigesComponent},
    {path:'TypesdeTransactions',component:TypesdeTransactionsComponent},
    {path:'fluxvisa',component:FluxvisaComponent},
    {path:'Ventilationvisa',component:VentilationvisaComponent},
    {path:'comparaisonvisa',component:ComparaisonvisaComponent},
    {path:'rapprochementvisa',component:RapprochementvisaComponent},



    

    
  ]},
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
