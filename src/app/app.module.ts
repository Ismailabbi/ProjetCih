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
import { Ng2UploaderModule } from 'ng2-uploader';
import { UploadComponent } from './Home/home/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    HomeComponent,
    IntServiceComponent,
    ListfactureComponent,
    UploadComponent
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
    Ng2UploaderModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
