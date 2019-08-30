import { Component, OnInit,ViewChild } from '@angular/core';
import { SrvsService } from 'src/app/Services/srvs.service';
import { Service } from 'src/app/Models/Service';
import { Facture } from 'src/app/Models/Factures';
import { FactureService } from 'src/app/Services/facture.service';
import {Popup} from 'ng2-opd-popup';
import * as $ from 'jquery';

@Component({
  selector: 'app-listfacture',
  templateUrl: './listfacture.component.html',
  styleUrls: ['./listfacture.component.css']
})
export class ListfactureComponent implements OnInit {
  
  constructor(private SrvSrvsService:SrvsService,private FactureServicess:FactureService,private popup:Popup) { }
  s:Facture[]
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
  dataall:any[]
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
    this.SrvSrvsService.getCanal().subscribe(
      data=>{
        this.datacanal=data
      }
    )
    this.SrvSrvsService.getAcceptance().subscribe(
      data=>{
        this.datacceptance=data
      }
    )
    this.SrvSrvsService.getorigine().subscribe(data=>{
      this.dataorigine=data
      console.log(this.dataorigine)
    })
    this.SrvSrvsService.getclassfication().subscribe(
      data=>{
        this.dataclassification=data
      }
    )
    this.FactureServicess.get_factures().subscribe((data)=>{
      this.FactureServicess.get_date().subscribe(data=>{
        
        this.datadate=data
        console.log(this.datadate)
      })
      this.FactureServicess.get_event().subscribe(data=>{
        this.dataevent=data
      })
      this.FactureServicess.get_servicedescription().subscribe(data=>{
        this.servicedesc=data
      })
      this.s=data
      this.dataall=data
 this. page = 1;
 this. pageSize = 8;
  this.collectionSize = this.s.length;
 
    })
  }
  
  fermer(){
    this.popup.hide()
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
