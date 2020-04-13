import { Component, OnInit,ViewChild, ViewChildren,ElementRef,TemplateRef  } from '@angular/core';
import { SrvsService } from 'src/app/Services/srvs.service';
import { Service } from 'src/app/Models/Service';
import { Facture } from 'src/app/Models/Factures';
import { FactureService } from 'src/app/Services/facture.service';
import * as $ from 'jquery';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AcceptancePipe } from 'src/app/Pipes/acceptance.pipe';
import { CanalPipe } from 'src/app/Pipes/canal.pipe';
import { ClassificationPipe } from 'src/app/Pipes/classification.pipe';
import { ServicecodePipe } from 'src/app/Pipes/servicecode.pipe';
import { EventdescriptionPipe } from 'src/app/Pipes/eventdescription.pipe';
import { SercivnamsPipe } from 'src/app/Pipes/sercivnams.pipe';
import { OrginepipePipe } from 'src/app/Pipes/orginepipe.pipe';
import { DatePipe } from '@angular/common';
import { PipedatePipe } from 'src/app/Pipes/pipedate.pipe';
import { DatemoisPipe } from 'src/app/Pipes/datemois.pipe';
import { FiltrageService } from 'src/app/Services/filtrage.service';
import { ClassificationsService } from 'src/app/Services/classifications.service';
import {MontantserviceService} from '../../../Services/montantservice.service'

@Component({
  selector: 'app-listfacture',
  templateUrl: './listfacture.component.html',
  styleUrls: ['./listfacture.component.css']
})
export class ListfactureComponent implements OnInit {
  @ViewChildren('myVar') nameInputRef: ElementRef;

  constructor(private SrvSrvsService:SrvsService,private FactureServicess:FactureService,public filtrageservices:FiltrageService, public classifications:ClassificationsService,private servicemontant:MontantserviceService,private modalService: BsModalService) { }
  s:Facture[]
  modalRef: BsModalRef;
  Mastermontant:string

  nextdisabled=false
  prvdisabled=true
  start=0
  end=100
  datacategorie
  keywordcategorie='Categorie'
  datafamille
  dataprocessus
  keywordProcessus='Processus'
  dataavant:any[]
  datann=['2018','2019']
  keywordann='annee'
  datamois=['All','Janvier','Fevrier','Mars','Avril','Mai','Juin','Aout','Septembre','Octobre','Novembre','Decembre']
  keywordmois="mois"
 ss=0 ;
 processusselected
 familleselected
  dataeventds=[]
  datasclacceptance=[]
  keywordfamille='Famille'
  keywordacceptance='Acceptance'
  datatransform=[]
  keywordevent="EventDescription"
  chargetotal:number
  nombrefacture:number
  dataorigine
  dataclassification
  servicecode:string
  datadate;
  acceptance
  canal
  origine
  datacanal
  d:string
  dataevent;
  factpop:Facture
  filterbol:boolean=false;
  datacceptance
  event:string;
  an;
  datacode=[]
  keywordcode="ServiceCodeDescription"
  datapipe:any[]
  dataall:any[]
  datascanal=[]
  keywordcanal='Canal'
  dataorigin=[]
  keywordorigin='Origine'
  count=0
  factures:Facture[]
  categorieselected
  servicedesc;
  page ;
  pageSize ;
  collectionSize ;
 
  
  openModal(template: TemplateRef<any>,facture:Facture) {
    this.modalRef = this.modalService.show(template);
    this.factpop=facture
  }
  selectEventco(item){
    if(item.Origine=="All"){
          this.origine=undefined
          setTimeout(() => {
       
            this.start=0
            this.end=100
            this.activenext();
    
          }, 0,1);
    }
    else{
    
    this.origine=item.Origine
    setTimeout(() => {
       
      this.start=0
      this.end=100
      this.activenext();

    }, 0,1);
  }
  }
  selectevent(item){

    if(item.EventDescription=="All"){
      this.event=undefined
      setTimeout(() => {
       
        this.start=0
        this.end=100
        this.activenext();

      }, 0,1);
}
else{
  
    this.event=item.EventDescription
    setTimeout(() => {
       
      this.start=0
      this.end=100
      this.activenext();

    }, 0,1);  

      
  }
 
  
 



 

}
  
  selectcode(item){
    if(item.ServiceCodeDescription=="All"){
      this.servicecode=undefined
      
      
      setTimeout(() => {
       
        this.start=0
        this.end=100
        this.activenext();

      }, 0,1);
}
else{
 
    this.servicecode=item.ServiceCodeDescription

 
    setTimeout(() => {
      this.activenext();
      this.start=0
      this.end=this.filtrageservices.nombrefacture
    }, 0,1);
      
  
  
  }}
  activenext(){
    console.log(this.filtrageservices.nombrefacture)
    if( this.filtrageservices.nombrefacture<100){
      this.nextdisabled=true
    }
    else{
      
      this.nextdisabled=false
      console.log(this.nextdisabled)
    }
  }
  categorieselect(item){
    if(item.Categorie=='All'){

    }
    else{
      this.categorieselected=item.Categorie

    }

  }
  vider(){
    this.servicecode=undefined
    this.event=undefined
    this.d=undefined
  }
  
  selectann(item){
    if(item=="All"){
      this.an=undefined
      setTimeout(() => {
       
        this.start=0
        this.end=100
        this.activenext();

      }, 0,1);
}

else{
console.log(item)
this.an=item
setTimeout(() => {
       
  this.start=0
  this.end=100
  this.activenext();

}, 0,1);
}
  }
  selectprocessus(item){
    if(item.Processus=='All'){
        this.processusselected=undefined
        setTimeout(() => {
       
          this.start=0
          this.end=100
          this.activenext();
  
        }, 0,1);
    }
    else{
      this.processusselected=item.Processus
      setTimeout(() => {
       
        this.start=0
        this.end=100
        this.activenext();

      }, 0,1);
    }
  }
  selectedfamille(item){
    if(item.Famille=="All"){

      this.familleselected=undefined
      setTimeout(() => {
       
        this.start=0
        this.end=100
        this.activenext();

      }, 0,1);
}
else{
 
this.familleselected=item.Famille
setTimeout(() => {
       
  this.start=0
  this.end=100
  this.activenext();

}, 0,1);

}
}
activeprv(){

}  
  
  selectdate(item){
    if(item=="All"){
          this.d=undefined
          setTimeout(() => {
       
            this.start=0
            this.end=100
            this.activenext();
    
          }, 0,1);
    }
    else{
    console.log(item)
    this.d=item
    setTimeout(() => {
       
      this.start=0
      this.end=100
      this.activenext();

    }, 0,1);
  }
  }
  affchfilter(){
    this.filterbol=!this.filterbol
   }
   selectEventca(item){
    if(item.Canal=="All"){
          this.canal=undefined
          setTimeout(() => {
       
            this.start=0
            this.end=100
            this.activenext();
    
          }, 0,1);
    }
    else{
   
    this.canal=item.Canal
    setTimeout(() => {
       
      this.start=0
      this.end=100
      this.activenext();

    }, 0,1);
  
  }
  }
   selectEventa(item){
  //  console.log(this.datatransform)

    if(item.Acceptance=="All"){
      this.acceptance=undefined
      setTimeout(() => {
       
        this.start=0
        this.end=100
        this.activenext();

      }, 0,1);
}
else{
  
    this.acceptance=item.Acceptance
    setTimeout(() => {
       
      this.start=0
      this.end=100
      this.activenext();

    }, 0,1);
   
       
  }
  
 
   }







  
  ngOnInit() {
    this.servicemontant.getinfoMc().subscribe( (data)=>{
      this.Mastermontant=data[0]['Total']
        })
    this.classifications.get_Categorie().subscribe(data=>{
      this.datacategorie=data
      this.datacategorie.unshift({'Categorie':'All'})
     
    
    })
    this.classifications.get_Processus().subscribe(data=>{
       this.dataprocessus=data
       this.dataprocessus.unshift({'Processus':'All'})
    })
    this.classifications.get_Famille().subscribe(data=>{
    
      this.datafamille=data
      this.datafamille.unshift({'Famille':'All'})
    })
    this.classifications.getCanal().subscribe(data=>{
        this.datascanal=data
        this.datascanal.unshift({'Canal':'All'})
    })
    this.classifications.getAcceptance().subscribe(data=>{
        this.datacceptance=data
        this.datasclacceptance=data
        this.datasclacceptance.unshift({'Acceptance':'All'})
      })
    this.classifications.getorigine().subscribe(data=>{
      this.dataorigin=data
      console.log(data)
      this.dataorigin.unshift({'Origine':'All'})
    })
    this.classifications.getclassfication().subscribe(
      data=>{
        this.dataclassification=data
      }
    )
    this.FactureServicess.get_factures().subscribe((data)=>{
      console.log(data)
      this.filtrageservices.calcultotal(data)
        console.log(this.filtrageservices.montanttotal)

      this.FactureServicess.get_date().subscribe(data=>{
        
        this.datadate=data
      })
      this.FactureServicess.get_event().subscribe(data=>{
        this.dataevent=data
        this.dataeventds=this.dataevent
        this.dataeventds.unshift({'EventDescription':'All'})
      })
      this.FactureServicess.get_servicedescription().subscribe(data=>{
        this.servicedesc=data
        console.log(data)
        this.datacode=this.servicedesc
        this.datacode.unshift({'ServiceCodeDescription':'All'})
      })
      this.s=data
      this.factures=this.s
      console.log(this.factures)
      this.dataall=data
 this. page = 1;
 this. pageSize = 8;
  this.collectionSize = this.s.length;
 
    })
  }

  

 next(){
   this.prvdisabled=false
  if((this.end+100)<=this.filtrageservices.nombrefacture){
    this.end=this.end+100
     console.log(this.end)
  }
   
 if((this.start+100<this.filtrageservices.nombrefacture)&&(this.start+100<this.end)){
   this.start=this.start+100
   console.log(this.start)
    if(this.start+100>this.filtrageservices.nombrefacture){
        this.nextdisabled=true
    }
 }
 else{
   console.log('ok')
   this.nextdisabled=true
 }
 
 
 }
 prv(){
  if((this.start-100)>=0){
    this.start=this.start-100
    console.log(this.start)
    if(this.start==0){
      this.prvdisabled=true
    }
  }
  else{
    this.prvdisabled=true
  }
  if((this.end-100)>=100){
    this.end=this.end-100
    console.log(this.end)
  }
 }

}
   
  
       

   
  
   
   
  


