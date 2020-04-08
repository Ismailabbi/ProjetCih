import { Component, OnInit,ViewChild, ViewChildren,ElementRef } from '@angular/core';
import { SrvsService } from 'src/app/Services/srvs.service';
import { Service } from 'src/app/Models/Service';
import { Facture } from 'src/app/Models/Factures';
import { FactureService } from 'src/app/Services/facture.service';
import {Popup} from 'ng2-opd-popup';
import * as $ from 'jquery';
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

  constructor(private SrvSrvsService:SrvsService,private FactureServicess:FactureService,private popup:Popup,public filtrageservices:FiltrageService, public classifications:ClassificationsService,private servicemontant:MontantserviceService) { }
  s:Facture[]
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
  show(country:Facture){
    this.popup.options = {
      header: "Detail",
      color: "#f65900", // red, blue....
      widthProsentage: 80, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
  this.popup.show(this.popup.options);
  this.factpop=country

  }
  
  
  selectEventco(item){
    if(item.Origine=="All"){
          this.origine=undefined
    }
    else{
    console.log(item)
    this.origine=item.Origine}
  }
  selectevent(item){

    if(item.EventDescription=="All"){
      this.event=undefined
}
else{
  
    this.event=item.EventDescription
  

      
  }
 
  
 



 

}
  
  selectcode(item){
    if(item.ServiceCodeDescription=="All"){
      this.servicecode=undefined
}
else{
  
    this.servicecode=item.ServiceCodeDescription

      
  
  
  }}
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
}

else{
console.log(item)
this.an=item}
  }
  selectprocessus(item){
    if(item.Processus=='All'){
        this.processusselected=undefined
    }
    else{
      this.processusselected=item.Processus
    }
  }
  selectedfamille(item){
    if(item.Famille=="All"){

      this.familleselected=undefined
}
else{
 
this.familleselected=item.Famille}
}
  
  
  selectdate(item){
    if(item=="All"){
          this.d=undefined
    }
    else{
    console.log(item)
    this.d=item}
  }
  affchfilter(){
    this.filterbol=!this.filterbol
   }
   selectEventca(item){
    if(item.Canal=="All"){
          this.canal=undefined
    }
    else{
   
    this.canal=item.Canal}
  }
   selectEventa(item){
  //  console.log(this.datatransform)

    if(item.Acceptance=="All"){
      this.acceptance=undefined
}
else{
  
    this.acceptance=item.Acceptance
   
       
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

  fermer(){
    this.popup.hide()
  }

 next(){
   this.prvdisabled=false
  if((this.end+100)<=this.factures.length){
    this.end=this.end+100
     console.log(this.end)
  }
   
 if((this.start+100<this.factures.length)&&(this.start+100<this.end)){
   this.start=this.start+100
   console.log(this.start)
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
   
  
       

   
  
   
   
  


