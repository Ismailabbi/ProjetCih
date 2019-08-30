import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

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
    AdminbordComponent
  ],
  imports: [
    BrowserModule,
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
    FontAwesomeModule




  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
