import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/Services/facture.service';
import { ClassificationsService } from 'src/app/Services/classifications.service';

@Component({
  selector: 'app-listevent',
  templateUrl: './listevent.component.html',
  styleUrls: ['./listevent.component.css']
})
export class ListeventComponent implements OnInit {
  data
  datacategorie
  keywordcategorie='Categorie'
  datafamille
  dataprocessus
  keywordfamille='Famille'
  processusselected
  keywordProcessus='Processus'
  datanum=[]
  keywordnum="NumEvent"
  dataeventt=[]
  nomevent
  keywordnom="NomEvent"
  ID
  num
  dataid=[]
  keywordId="IDService"
  k
  namedata
  s:any[]
  eventdata
  servicecode:string
  datadate;
  dataevent;
  filterbol:boolean=false;
  event:string;
  dataall:any[]
  servicedesc;
  page ;
  pageSize ;
  collectionSize ;
  familleselected
  categorieselected
  
  get countries(): any[] {
    COUNTRIES=this.s
    return COUNTRIES
    
    
  }
  
  categorieselect(item){
    if(item.Categorie=='All'){
             this.categorieselected=undefined
    }
    else{
      this.categorieselected=item.Categorie

    }

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
  constructor( private FactureServicess:FactureService,public classifications:ClassificationsService) { }

  ngOnInit() {
    this.FactureServicess.get_events().subscribe(d=>{
     console.log(d)
      this.s=d.reverse()
      this.dataall=d
    })
    this.classifications.get_Categorie().subscribe(data=>{
      this.datacategorie=data
      this.datacategorie.unshift({'Categorie':'All'})
      console.log(this.datacategorie);
     
    
    })
    this.classifications.get_Processus().subscribe(data=>{
      this.dataprocessus=data
      this.dataprocessus.unshift({'Processus':'All'})
   })
   this.classifications.get_Famille().subscribe(data=>{
   
     this.datafamille=data
     this.datafamille.unshift({'Famille':'All'})
   })
    

    
    this.FactureServicess.get_eventid_event().subscribe(data=>{
       this.eventdata=data
       this.datanum=this.eventdata
       this.datanum.unshift({'NumEvent':'All'})
    })
    this.FactureServicess.get_serviceId_event().subscribe(r=>{
      console.log(r)
      this.ID=r
      this.dataid=this.ID
      this.dataid.unshift({'IDService':'All'})
    })
    this.FactureServicess.get_Name_event().subscribe(data=>{
      
      this.namedata=data
      this.dataeventt=this.namedata
      this.dataeventt.unshift({'NomEvent':'All'})
      console.log(this.dataeventt)
    })
      
 this. page = 1;
 this. pageSize = 8;
  this.collectionSize = this.s.length-4;
 
    }
    affchfilter(){
      this.filterbol=!this.filterbol
     }
     vider(){
       this.k=undefined
       this.num=undefined
       this.nomevent=undefined
     }
     selectEvent(item){
      if(item.NomEvent=="All"){
        this.nomevent=undefined
  }
  else{
  console.log(item)
  this.nomevent=item.NomEvent}
     }
     selectEventnum(item){
      if(item.NumEvent=="All"){
        this.num=undefined
  }
  else{
  this.num=item.NumEvent}
     }

     selectEventId(item){
      if(item.IDService=="All"){
        this.k=undefined
  }
  else{
  this.k=item.IDService}
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
