import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/Services/facture.service';
import {Popup} from 'ng2-opd-popup';
import { Facture } from 'src/app/Models/Factures';
import { SrvsService } from 'src/app/Services/srvs.service';
import { AcceptancePipe } from 'src/app/Pipes/acceptance.pipe';
import { CanalPipe } from 'src/app/Pipes/canal.pipe';
import { ServicecodePipe } from 'src/app/Pipes/servicecode.pipe';
import { EventdescriptionPipe } from 'src/app/Pipes/eventdescription.pipe';
import { OrginepipePipe } from 'src/app/Pipes/orginepipe.pipe';
import { PipedatePipe } from 'src/app/Pipes/pipedate.pipe';
import { DatemoisPipe } from 'src/app/Pipes/datemois.pipe';
import { DatePipe } from '@angular/common';
import { ClassificationsService } from 'src/app/Services/classifications.service';

@Component({
  selector: 'app-facture-prevision',
  templateUrl: './facture-prevision.component.html',
  styleUrls: ['./facture-prevision.component.css']
})
export class FacturePrevisionComponent implements OnInit {
  s:Facture[]
  dataeventds=[]
  datacode=[]
  keywordcode="ServiceCodeDescription"
  datasclacceptance=[]
  keywordacceptance='Acceptance'
  keywordevent="EventDescription"
  keywordcanal='Canal'
  dataorigin=[]
  datascanal=[]
  datann=['All','2018','2019']
  keywordann='annee'
  datamois=['All','Janvier','Fevrier','Mars','Avril','Mai','Juin','Aout','Septembre','Octobre','Novembre','Decembre']
  keywordorigin='Origine'
  keywordmois="mois"
  servicecode:string
  an;
  dataorigine
  dataclassification
  datadate;
  acceptance
  chargetotal:number
  nombrefacture:number
  canal
  datacanal
  origine
  d:string
  dataevent;
  factpop:Facture
  filterbol:boolean=false;
  event:string;
  datacceptance
  dataall:any[]
  servicedesc;
  page ;
  pageSize ;
  collectionSize ;
  constructor(private FactureServicess:FactureService,private popup:Popup,private SrvSrvsService:SrvsService ,public classifications:ClassificationsService) { }
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
  fermer(){
    this.popup.hide()
  }
  calcul(){
   /* let datat:any[]=[this.countries]
    let a=new ServicecodePipe()
    datat=a.transform(this.countries,this.servicecode)
    let b=new EventdescriptionPipe()
    datat=b.transform(datat,this.event)
    let c=new AcceptancePipe()
    datat=c.transform(datat,this.acceptance)
    let d=new CanalPipe()
    datat=d.transform(datat,this.canal)
  let e=new OrginepipePipe()
  datat=d.transform(datat,this.origine)
  let f=new PipedatePipe()
  datat=f.transform(datat,this.d)
  let g=new DatemoisPipe()
  datat=g.transform(datat,this.an)
  this.nombrefacture=datat.length
  let at:number=0
  datat.forEach(s=>{
    if(Number(s.TotalCharge)){
     let b=Number(s.TotalCharge)
     at=at+b
  }})

  this.chargetotal=at



  
*/

  }
  selectcode(item){
    if(item.ServiceCodeDescription=="All"){
      this.servicecode=undefined
}
else{
  
    this.servicecode=item.ServiceCodeDescription

      
  
  
  }}
  selectann(item){
    if(item=="All"){
      this.an=undefined
}
else{
console.log(item)
this.an=item}
  }
  selectdate(item){
    if(item=="All"){
          this.d=undefined
    }
    else{
    console.log(item)
    this.d=item}
  }
  selectEventco(item){
    if(item.Origine=="All"){
      console.log("yamok")
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
console.log(item)
this.event=item.EventDescription}
  }
  selectEventca(item){
    if(item.Canal=="All"){
          this.canal=undefined
    }
    else{
    console.log(item)
    this.canal=item.Canal}
  }
   selectEventa(item){
    if(item.Acceptance=="All"){
          this.acceptance=undefined
    }
    else{
    console.log(item)
    this.acceptance=item.Acceptance}
  }
  get countries(): any[] {
    COUNTRIES=this.s
    console.log(COUNTRIES)
    return COUNTRIES
    
    
  }
  vider(){
    this.servicecode=undefined
    this.event=undefined
    this.d=undefined
  }
  affchfilter(){
    this.filterbol=!this.filterbol
   }
  ngOnInit() {
    this.classifications.getCanal().subscribe(
      data=>{
        this.datacanal=data
        this.datascanal=data
        this.datacanal.unshift({'Canal':'All'})
      }
    )
    this.classifications.getAcceptance().subscribe(
      data=>{
        this.datacceptance=data
        this.datasclacceptance=data
        this.datasclacceptance.unshift({'Acceptance':'All'})
      }
    )
    this.classifications.getclassfication().subscribe(
      data=>{
        this.dataclassification=data
      }
    )
    this.classifications.getorigine().subscribe(data=>{
      this.dataorigine=data
       this.dataorigin=this.dataorigine
      this.dataorigin.unshift({'Origine':'All'})
    })
    this.FactureServicess.get_facutresP().subscribe((data)=>{
      let a:number=0;
      this.nombrefacture=data.length
      data.forEach(s=>{
        if(Number(s.TotalCharge)){
         let b=Number(s.TotalCharge)
         a=a+b
      }})
      this.chargetotal=a/1000

      this.FactureServicess.get_date().subscribe(data=>{
        
        this.datadate=data
        console.log(this.datadate)
      })
      this.FactureServicess.get_event().subscribe(data=>{
        this.dataevent=data
        this.dataeventds=this.dataevent
        this.dataeventds.unshift({'EventDescription':'All'})
      })
      this.FactureServicess.get_servicedescription().subscribe(data=>{
        this.servicedesc=data
        this.datacode=this.servicedesc
        this.datacode.unshift({'ServiceCodeDescription':'All'})
      })
      this.s=data
      this.dataall=data
 this. page = 1;
 this. pageSize = 8;
  this.collectionSize = this.s.length;
 
    })
  }

}
interface Country {
  id?: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}
let COUNTRIES: any[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'France',
    flag: 'c/c3/Flag_of_France.svg',
    area: 640679,
    population: 64979548
  },
  {
    name: 'Germany',
    flag: 'b/ba/Flag_of_Germany.svg',
    area: 357114,
    population: 82114224
  },
  {
    name: 'Portugal',
    flag: '5/5c/Flag_of_Portugal.svg',
    area: 92090,
    population: 10329506
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'Vietnam',
    flag: '2/21/Flag_of_Vietnam.svg',
    area: 331212,
    population: 95540800
  },
  {
    name: 'Brazil',
    flag: '0/05/Flag_of_Brazil.svg',
    area: 8515767,
    population: 209288278
  },
  {
    name: 'Mexico',
    flag: 'f/fc/Flag_of_Mexico.svg',
    area: 1964375,
    population: 129163276
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'India',
    flag: '4/41/Flag_of_India.svg',
    area: 3287263,
    population: 1324171354
  },
  {
    name: 'Indonesia',
    flag: '9/9f/Flag_of_Indonesia.svg',
    area: 1910931,
    population: 263991379
  },
  {
    name: 'Tuvalu',
    flag: '3/38/Flag_of_Tuvalu.svg',
    area: 26,
    population: 11097
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];
