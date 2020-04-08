import { Component, OnInit } from '@angular/core';
import {VisaService} from '../../../Services/visa.service'
import {Popup} from 'ng2-opd-popup';
import { SrvsService } from 'src/app/Services/srvs.service';
import { FiltragevisaService} from '../../../Services/filtragevisa.service'
import { from } from 'rxjs';
import { ClassificationsService } from 'src/app/Services/classifications.service';
@Component({
  selector: 'app-visafacture',
  templateUrl: './visafacture.component.html',
  styleUrls: ['./visafacture.component.css']
})
export class VisafactureComponent implements OnInit {
  s:any[]
  page=1 ;
  an
  d:string

  filterbol:boolean=false;
  datann=['2018','2019']
  keywordann='annee'
  datamois=['All','Janvier','Fevrier','Mars','Avril','Mai','Juin','Aout','Septembre','Octobre','Novembre','Decembre']
  keywordmois="mois"
  dataentity=[]
  keywordEntity='EntityType'
  dataorigine=[]
  dataorigin=[]
  keywordorigin='Origine'
  pageSize=8 ;
  datarate=[];
  keywordrate="RateType"
  datacanal
  datascanal
  keywordcanal='Canal'
  datacceptance
  datasclacceptance
  keywordacceptance='Acceptance'
  rateselect
  collectionSize ;
  factpop
  datatity
  entityselected
  get countries(): any[] {
    COUNTRIES=this.s
    return COUNTRIES
    
    
  }
  
  affchfilter(){
    this.filterbol=!this.filterbol
   }

   selectrate(item){
     if(item.RateType==='All'){
      this.rateselect=undefined
     }
     else{
       this.rateselect=item.RateType
       console.log(this.rateselect)
     }

   }

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
  selectEntity(item){
     if(item.EntityType=="All"){
      this.entityselected=undefined
         }
     else{
       console.log
       this.entityselected=item.EntityType
     }
  }
  show(country:any){
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
  constructor(public visasevice:VisaService,private popup:Popup,private VisaService:VisaService,private SrvSrvsService:SrvsService,public FiltragevisaService:FiltragevisaService,public classifications:ClassificationsService) { }

  ngOnInit() {
    this.visasevice.getAllvisa().subscribe(data=>{
      console.log(data)
      this.FiltragevisaService.calcultotal(data)
  this.s=data
  this. page = 1;
 this. pageSize = 8;
      this.collectionSize = this.s.length;
      this.FiltragevisaService.nombrefacture=this.s.length
         

    })
    this.visasevice.getEntitytype().subscribe(
      data=>{
        console.log(data)
        this.datatity=data
        this.dataentity=data
        this.dataentity.unshift({'EntityType':'All'})
      }
    )
    this.visasevice.getRatetype().subscribe(
      data=>{
        this.datarate=data
        this.datarate.unshift({'RateType':'All'})
        console.log(this.datarate)
      }

    )
    this.classifications.getorigine().subscribe(data=>{
      this.dataorigine=data
      this.dataorigin=this.dataorigine
      this.dataorigin.unshift({'Origine':'All'})
      console.log(data)
    })
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
