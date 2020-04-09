import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './Login/authentification/authentification.component';
import { HomeComponent } from './Home/home/home.component';
import { IntServiceComponent } from './Home/home/int-service/int-service.component';
import {MatTableModule} from '@angular/material/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {PopupModule} from 'ng2-opd-popup';
import { ListfactureComponent } from './Home/home/listfacture/listfacture.component';
import { UploadComponent } from './Home/home/upload/upload.component';
import { TableaubordComponent } from './Home/home/tableaubord/tableaubord.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { SercivnamsPipe } from './Pipes/sercivnams.pipe';
import { TypeservicePipe } from './Pipes/typeservice.pipe';
import { ClassificationPipe } from './Pipes/classification.pipe';
import { ServicecodePipe } from './Pipes/servicecode.pipe';
import { EventdescriptionPipe } from './Pipes/eventdescription.pipe';
import { ChartsModule } from 'ng2-charts';
import { from } from 'rxjs';
import { ListeventComponent } from './Home/home/listevent/listevent.component';
import { AcceptancePipe } from './Pipes/acceptance.pipe';
import { CanalPipe } from './Pipes/canal.pipe';
import { FacturePrevisionComponent } from './Home/home/facture-prevision/facture-prevision.component';
import { DashbordprvComponent } from './Home/home/dashbordprv/dashbordprv.component';
import { PipedatePipe } from './Pipes/pipedate.pipe';
import { EventnamePipe } from './Pipes/eventname.pipe';
import { EventnumPipe } from './Pipes/eventnum.pipe';
import { IdPipe } from './Pipes/id.pipe';
import { SurfaceboardComponent } from './surfaceboard/surfaceboard.component';
import { SurfboardComponent } from './Home/home/surfboard/surfboard.component';
import { OrginepipePipe } from './Pipes/orginepipe.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminbordComponent } from './Home/home/adminbord/adminbord.component';
import { TableaumontantComponent } from './Home/home/tableaumontant/tableaumontant.component';
import { DatemoisPipe } from './Pipes/datemois.pipe';
import { SurfaceprvComponent } from './Home/home/surfaceprv/surfaceprv.component';
import { TablaumontantpComponent } from './Home/home/tablaumontantp/tablaumontantp.component';
import { ComparaisonAComponent } from './Home/home/comparaison-a/comparaison-a.component';
import { CompprvComponent } from './Home/home/compprv/compprv.component';
import { RapprochementComponent } from './Home/home/rapprochement/rapprochement.component';
import { VisafactureComponent } from './Home/home/visafacture/visafacture.component';
import { VisamoisPipe } from './Pipes/visamois.pipe';
import { AnnevisaPipe } from './Pipes/annevisa.pipe';
import { RatevisaPipe } from './Pipes/ratevisa.pipe';
import { EntityvisaPipe } from './Pipes/entityvisa.pipe';
import { ProcessusPipe } from './Pipes/processus.pipe';
import { CategoriePipe } from './Pipes/categorie.pipe';
import { ProcessusmasterPipe } from './Pipes/processusmaster.pipe';
import { AccueilComponent } from './Home/home/accueil/accueil.component';
import { EventprocessusPipe } from './Pipes/eventprocessus.pipe';
import { EventfamillePipe } from './Pipes/eventfamille.pipe';
import { EventcategoriePipe } from './Pipes/eventcategorie.pipe';
import { AcceptanceservicePipe } from './Pipes/acceptanceservice.pipe';
import { OriginservicePipe } from './Pipes/originservice.pipe';
import { CanalservicePipe } from './Pipes/canalservice.pipe';
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
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    HomeComponent,
    IntServiceComponent,
    ListfactureComponent,
    UploadComponent,
    TableaubordComponent,
    TypeservicePipe,
    ClassificationPipe,
    ServicecodePipe,
    EventdescriptionPipe,
    SercivnamsPipe,
    ListeventComponent,
    AcceptancePipe,
    CanalPipe,
    FacturePrevisionComponent,
    DashbordprvComponent,
    PipedatePipe,
    EventnamePipe,
    EventnumPipe,
    IdPipe,
    SurfaceboardComponent,
    SurfboardComponent,
    OrginepipePipe,
    AdminbordComponent,
    TableaumontantComponent,
    DatemoisPipe,
    SurfaceprvComponent,
    TablaumontantpComponent,
    ComparaisonAComponent,
    CompprvComponent,
    RapprochementComponent,
    VisafactureComponent,
    VisamoisPipe,
    AnnevisaPipe,
    RatevisaPipe,
    EntityvisaPipe,
    ProcessusPipe,
    CategoriePipe,
    ProcessusmasterPipe,
    AccueilComponent,
    EventprocessusPipe,
    EventfamillePipe,
    EventcategoriePipe,
    AcceptanceservicePipe,
    OriginservicePipe,
    CanalservicePipe,
    FluxtableComponent,
    VueGeneralComponent,
    TypeBaseComponent,
    LitigesComponent,
    TypesdeTransactionsComponent,
    UploadvisaComponent,
    FluxvisaComponent,
    DomainechartComponent,
    SurfacevisaComponent,
    VentilationvisaComponent,
    ComparaisonvisaComponent,
    RapprochementvisaComponent
  ],
  imports: [
    BrowserModule,
    AutocompleteLibModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    NgbModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    PopupModule.forRoot(),
    HttpClientModule,
    ChartsModule,
    FontAwesomeModule,
    Ng2GoogleChartsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),





  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
