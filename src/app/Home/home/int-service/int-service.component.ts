import { Component, OnInit ,ViewChild} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Popup} from 'ng2-opd-popup';
import {SrvsService} from '../../../Services/srvs.service'
import { Service } from 'src/app/Models/Service';
import { SercivnamsPipe } from 'src/app/Pipes/sercivnams.pipe';

@Component({
  selector: 'app-int-service',
  templateUrl: './int-service.component.html',
  styleUrls: ['./int-service.component.css']
})




export class IntServiceComponent implements OnInit {
  constructor(private _flashMessagesService: FlashMessagesService,private popup:Popup,private SrvSrvsService:SrvsService) {}
  s:Service[]
  servicename:string;
  typeservice:string
  classification:string
  filterbol:boolean=false;
  dataall:any[]
  page ;
  pageSize ;
  collectionSize ;
 
  ngOnInit() {
    this.SrvSrvsService.get_services().subscribe((data)=>{
      this.s=data
      this.dataall=data
    
 this. page = 3;
 this. pageSize = 8;
  this.collectionSize = this.s.length;
  console.log(data)
 
    })
    console.log(this.servicename+"haha")
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

