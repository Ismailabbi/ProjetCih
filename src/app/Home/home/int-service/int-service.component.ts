import { Component, OnInit ,ViewChild} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Popup} from 'ng2-opd-popup';
import {SrvsService} from '../../../Services/srvs.service'
import { Service } from 'src/app/Models/Service';
import { SercivnamsPipe } from 'src/app/Pipes/sercivnams.pipe';
import { AcceptancePipe } from 'src/app/Pipes/acceptance.pipe';
import { ClassificationsService } from 'src/app/Services/classifications.service';

@Component({
  selector: 'app-int-service',
  templateUrl: './int-service.component.html',
  styleUrls: ['./int-service.component.css']
})




export class IntServiceComponent implements OnInit {
  constructor(private _flashMessagesService: FlashMessagesService,private popup:Popup,private SrvSrvsService:SrvsService,public classifications:ClassificationsService) {}
  s:Service[]
  origine
 
  k
  origin:string
  acceptance:string
  servicename:string;
  typeservice:string
 dataorigine
  classification:string
  filterbol:boolean=false;
  dataall:any[]
  canal:string
  page ;
  pageSize ;
  collectionSize ;
  dataname;
  datatype;
 dataclassification
 datacceptance;
 datacanal;
 keyword = 'ServiceNAME';
 data = [];
 datastype= [];
 keywordtype='Typedeservice'
 datasclass= [];
 keywordclass='Classification'
 datasclacceptance=[]
 keywordacceptance='Acceptance'
 datascanal=[]
 keywordcanal='Canal'
 dataorigin=[]
 keywordorigin='Origine'
 vider(){
   console.log("salam")
  this.classification=undefined;
  this.servicename=undefined
  this.typeservice=undefined
  this.acceptance=undefined
  this.canal=undefined
 }
  ngOnInit() {
    this.classifications.getorigine().subscribe(data=>{
      this.dataorigin=data
      console.log(this.dataorigine)
      this.dataorigin.unshift({'Origine':'All'})
    })
    this.SrvSrvsService.get_services().subscribe((data)=>{
      this.s=data
      this.dataall=data
      console.log(data)
      this.SrvSrvsService.getservicename().subscribe(data=>{
        this.dataname=data
        this.data=data
        this.data.unshift({'ServiceNAME':'All'})
      })
      this.SrvSrvsService.gettypeservice().subscribe(data=>{
        this.datatype=data
        this.datastype=data
        this.datastype.unshift({'Typedeservice':'All'})
      
      })
    this.classifications.getclassfication().subscribe(
      data=>{
        this.dataclassification=data
        this.datasclass=data
        this.datasclass.unshift({'Classification':'All'})
      }
    )
    this.classifications.getAcceptance().subscribe(
      data=>{
        this.datacceptance=data
        this.datasclacceptance=data
        this.datasclacceptance.unshift({'Acceptance':'All'})
      }
    )
    this.classifications.getCanal().subscribe(
      data=>{
        this.datacanal=data
        this.datascanal=data
        this.datacanal.unshift({'Canal':'All'})
        
      }
    )
 this. page = 3;
 this. pageSize = 8;
  this.collectionSize = this.s.length;
 
    })
   
  }
  
  selectEventa(item){
    if(item.Acceptance=="All"){
          this.acceptance=undefined
    }
    else{
    console.log(item)
    this.acceptance=item.Acceptance}
  }
  selectEventca(item){
    if(item.Canal=="All"){
          this.canal=undefined
    }
    else{
    console.log(item)
    this.canal=item.Canal}
  }
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  selectEvent(item) {
    if(item.ServiceNAME=="All"){
      console.log("yamok")
          this.servicename=undefined
    }
    else{
    console.log(item)
    this.servicename=item.ServiceNAME}
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

  selectEventtype(item) {
    if(item.Typedeservice=="All"){
          this.typeservice=undefined
    }
    else{
    console.log(item)
    this.typeservice=item.Typedeservice}
  }
  selectEventc(item){
    if(item.Classification=="All"){
      console.log("yamok")
          this.classification=undefined
    }
    else{
    console.log(item)
    this.classification=item.Classification}
  }
  

  affchfilter(){
   this.filterbol=!this.filterbol
  }
  show(){
    this.popup.show();

  }
  get countries(): any[] {
    COUNTRIES=this.s
    return COUNTRIES
    
    
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

