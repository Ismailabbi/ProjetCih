import { Component, OnInit,ViewChild  } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { DashbordService } from 'src/app/Services/dashbord.service';
import { SrvsService } from 'src/app/Services/srvs.service';
import { FactureService } from 'src/app/Services/facture.service';
import { ClassificationsService } from 'src/app/Services/classifications.service';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-comparaison-a',
  templateUrl: './comparaison-a.component.html',
  styleUrls: ['./comparaison-a.component.css']
})
export class ComparaisonAComponent implements OnInit {
  
  datacategorie
  wait:boolean=true
  
  keywordcategorie='Categorie'
  dataprocessus
  datafamille
  keywordProcessus='Processus'
  Processusvailabale:boolean=false
  data1:string="2018"
  data2:string="2019"
  datacanal
  keywordfamille='Famille'
  Acceptanceavailabale:boolean=false
  classavailabale=false
  datacceptance
  keywordcanal='Canal'
  datascanal=[]
  categorievailabale:boolean=false
  canalavailabale:boolean=false
  originavailabale=false
  isDataAvailable:boolean=false
  famillevailabale:boolean=false
  choix:string=""
  dataclassification
  dataorigin=[]
  dataorigine
  datasclass
  keywordacceptance='Acceptance'
  datasclacceptance=[]

  keywordorigin='Origine'

  keywordclass='Classification'
  classficationdiasabled:boolean
  acceptancedisabled:boolean
  processusdisabled:boolean
  familledisabled:boolean
  origindisabled:boolean
  categoriedisabled:boolean
  canaldisabled:boolean
  classactive(){
    this.classavailabale=true
    this.Acceptanceavailabale=false
    this.originavailabale=false
    this.canalavailabale=false
    this.categorievailabale=false
    this.famillevailabale=false
    this.Processusvailabale=false
    this.classficationdiasabled=true
    this.acceptancedisabled=false
    this.processusdisabled=false
    this.familledisabled=false
    this.origindisabled=false
    this.categoriedisabled=false

  }
  familleactive(){
    this.famillevailabale=true
    this.categorievailabale=false
    this.classavailabale=false
    this.Acceptanceavailabale=false
    this.originavailabale=false
    this.canalavailabale=false
    this.origindisabled=false
    this.classficationdiasabled=false
    this.canaldisabled=false
    this.acceptancedisabled=false
    this.categoriedisabled=false
    this.familledisabled=true
    this.processusdisabled=false
    this.categorievailabale=false
    this.Processusvailabale=false

  }
  calculprocessus(){
    this.popup7.hide()
    this.barChartData=[]
    this.isDataAvailable=false
    console.log(this.data1)
    console.log(this.choix)
  this.dash.post_comparaisonProcessus(Number(this.data1),this.choix).subscribe(
    data=>{
      console.log(data)
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
         d.data[Number(s.month)-1]=Number(s.TotalCharge)
       })
       console.log(d)
      d.label=this.data1
      d.backgroundColor='rgba(238, 83, 79, 1)'

       this.barChartData.push(d)
       this.isDataAvailable=true
       this.wait=false

   
     })
     this.dash.post_comparaisonProcessus(Number(this.data2),this.choix).subscribe(
      data=>{
        console.log(data)
        let  d:any={}
        d.data=[0,0,0,0,0,0,0,0,0]
         let dataArray:Array<any>=Object.values(data)
         dataArray.forEach(s=>{
           d.data[Number(s.month)-1]=Number(s.TotalCharge)
         })
         console.log(d)
        d.label=this.data2
        d.backgroundColor='rgba(51,106,241)'

         this.barChartData.push(d)
         this.isDataAvailable=true
         this.wait=false

     
       })




  }

  calculfamille(){
    this.popup6.hide()
    this.barChartData=[]
    this.isDataAvailable=false
    console.log(this.data1)
    console.log(this.choix)
  this.dash.post_comparaisonfamille(Number(this.data1),this.choix).subscribe(
    data=>{
      console.log(data)
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
         d.data[Number(s.month)-1]=Number(s.TotalCharge)
       })
       console.log(d)
      d.label=this.data1
      d.backgroundColor='rgba(238, 83, 79, 1)'

       this.barChartData.push(d)
       this.isDataAvailable=true
       this.wait=false

   
     })
     this.dash.post_comparaisonfamille(Number(this.data2),this.choix).subscribe(
      data=>{
        console.log(data)
        let  d:any={}
        d.data=[0,0,0,0,0,0,0,0,0]
         let dataArray:Array<any>=Object.values(data)
         dataArray.forEach(s=>{
           d.data[Number(s.month)-1]=Number(s.TotalCharge)
         })
         console.log(d)
        d.label=this.data2
        d.backgroundColor='rgba(51,106,241)'

         this.barChartData.push(d)
         this.isDataAvailable=true
        this.wait=false
     
       })

  }
    selectedfamille(item){
   

      this.choix=item.Famille
}
  categorieactive(){
    this.categorievailabale=true
    this.classavailabale=false
    this.Acceptanceavailabale=false
    this.originavailabale=false
    this.canalavailabale=false
    this.origindisabled=false
    this.classficationdiasabled=false
    this.canaldisabled=false
    this.acceptancedisabled=false
    this.categoriedisabled=true
    this.familledisabled=false
    this.processusdisabled=false
    this.famillevailabale=false
    this.Processusvailabale=false

  }
  Processusactive(){
    this.Processusvailabale=true
    this.categorievailabale=false
    this.classavailabale=false
    this.Acceptanceavailabale=false
    this.originavailabale=false
    this.canalavailabale=false
  
    this.origindisabled=false
    this.classficationdiasabled=false
    this.canaldisabled=false
    this.acceptancedisabled=false
    this.categoriedisabled=false
    this.familledisabled=false
    this.processusdisabled=true
    this.categorievailabale=false
    this.famillevailabale=false
  }
  selectEventa(item){
    this.choix=item.Acceptance
  }
  acceptanceactive(){
    this.Acceptanceavailabale=true
  this.classavailabale=false
  this.originavailabale=false
  this.canalavailabale=false
  this.origindisabled=false
  this.classficationdiasabled=false
  this.canaldisabled=false
  this.acceptancedisabled=true
  this.categoriedisabled=false
  this.familledisabled=false
  this.processusdisabled=false
  this.categorievailabale=false
  this.famillevailabale=false
  this.Processusvailabale=false

  }
  calculcategorie(){
    this.popup5.hide()
    this.barChartData=[]
    this.isDataAvailable=false
    console.log(this.data1)
    console.log(this.choix)
  this.dash.post_comparaisoncategorie(Number(this.data1),this.choix).subscribe(
    data=>{
      console.log(data)
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
         d.data[Number(s.month)-1]=Number(s.TotalCharge)
       })
       console.log(d)
      d.label=this.data1
      d.backgroundColor='rgba(238, 83, 79, 1)'

       this.barChartData.push(d)
       this.isDataAvailable=true

   
     })
     this.dash.post_comparaisoncategorie(Number(this.data2),this.choix).subscribe(
      data=>{
        console.log(data)
        let  d:any={}
        d.data=[0,0,0,0,0,0,0,0,0]
         let dataArray:Array<any>=Object.values(data)
         dataArray.forEach(s=>{
           d.data[Number(s.month)-1]=Number(s.TotalCharge)
         })
         console.log(d)
        d.label=this.data2
        d.backgroundColor='rgba(51,106,241)'

         this.barChartData.push(d)
         this.isDataAvailable=true
         this.wait=false

     
       }
    )





  }
 
  calculacceptance(){
    this.popup4.hide()
    this.barChartData=[]
    this.isDataAvailable=false
  this.dash.post_comparaisonacceptance(Number(this.data1),this.choix).subscribe(
    data=>{
      console.log(data)
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
         d.data[Number(s.month)-1]=Number(s.TotalCharge)
       })
       console.log(d)
      d.label=this.data1
      d.backgroundColor='rgba(238, 83, 79, 1)'

       this.barChartData.push(d)
       this.isDataAvailable=true
       this.wait=false


   
     }





  )



  this.dash.post_comparaisonacceptance(Number(this.data2),this.choix).subscribe(
    data=>{
      console.log(data)
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
         d.data[Number(s.month)-1]=Number(s.TotalCharge)
       })
       console.log(d)
      d.label=this.data2
      d.backgroundColor='rgba(51,106,241)'

       this.barChartData.push(d)

       this.isDataAvailable=true
       this.wait=false


   
     }
  )

  }
  public barChartOptions: ChartOptions = {
  
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Aout','Septembre','Octobre','Novemebre','Decembre'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  keywordann='annee'
  datann=['2018','2019']

  origineactive(){
    this.originavailabale=true
    this.classavailabale=false
    this.Acceptanceavailabale=false
    this.canalavailabale=false
    this.origindisabled=true
    this.classficationdiasabled=false
    this.canaldisabled=false
    this.acceptancedisabled=false
    this.categoriedisabled=false
    this.familledisabled=false
    this.processusdisabled=false
    this.categorievailabale=false
    this.famillevailabale=false
    this.Processusvailabale=false

  }
  canalactive(){
    this.canalavailabale=true
    this.classavailabale=false
    this.Acceptanceavailabale=false
    this.originavailabale=false
    this.origindisabled=false
    this.classficationdiasabled=false
    this.canaldisabled=true
    this.acceptancedisabled=false
    this.categoriedisabled=false
    this.familledisabled=false
    this.processusdisabled=false
    this.categorievailabale=false
    this.famillevailabale=false
    this.Processusvailabale=false


  }
  public barChartData: ChartDataSets[] = [
   
  ];

  constructor(public dash:DashbordService,private SrvSrvsService:SrvsService,private FactureServicess:FactureService,public classifications:ClassificationsService) { }
  @ViewChild('popup1',{static: true}) popup1: Popup;
  @ViewChild('popup2',{static: true}) popup2: Popup;
  @ViewChild('popup3',{static: true}) popup3: Popup;
  @ViewChild('popup4',{static: true}) popup4: Popup;
  @ViewChild('popup5',{static: true}) popup5: Popup;
  @ViewChild('popup6',{static: true}) popup6: Popup;
  @ViewChild('popup7',{static: true}) popup7: Popup;

  show1(){
  
    this.popup1.options = {
      header: "Detail",
      color: "#f65900", // red, blue....
      widthProsentage: 80, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
  this.popup1.show(this.popup1.options);
  

  }
  
  show2(){
    console.log('ah')
    this.popup2.options = {
      header: "Detail",
      color: "#f65900", // red, blue....
      widthProsentage: 80, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
  this.popup2.show(this.popup2.options);
  

  }
  show3(){
    console.log('ah')
    this.popup3.options = {
      header: "Detail",
      color: "#f65900", // red, blue....
      widthProsentage: 80, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
  this.popup3.show(this.popup3.options);
  

  }
  show4(){
    console.log('ah')
    this.popup4.options = {
      header: "Detail",
      color: "#f65900", // red, blue....
      widthProsentage: 80, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
  this.popup4.show(this.popup4.options);
  

  }
  show5(){
    console.log('ah')
    this.popup5.options = {
      header: "Detail",
      color: "#f65900", // red, blue....
      widthProsentage: 80, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
  this.popup5.show(this.popup5.options);
  

  }
  show6(){
    console.log('ah')
    this.popup6.options = {
      header: "Detail",
      color: "#f65900", // red, blue....
      widthProsentage: 80, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
  this.popup6.show(this.popup6.options);
  

  }
  show7(){
    console.log('ah')
    this.popup7.options = {
      header: "Detail",
      color: "#f65900", // red, blue....
      widthProsentage: 80, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
  this.popup7.show(this.popup7.options);
  

  }
  ngOnInit() {
    this.classifications.get_Processus().subscribe(data=>{
      this.dataprocessus=data
      this.dataprocessus.unshift({'Processus':'All'})
   })
    this.classifications.get_Categorie().subscribe(data=>{
      this.datacategorie=data
      this.datacategorie.unshift({'Categorie':'All'})
     
    
    })
    this.classifications.get_Famille().subscribe(data=>{
    
      this.datafamille=data
      this.datafamille.unshift({'Famille':'All'})
    })
this.classifications.getclassfication().subscribe(
    data=>{
      this.dataclassification=data
      this.datasclass=data
      this.datasclass.unshift({'Classification':'All'})
    }
  )
  this.classifications.getorigine().subscribe(data=>{
    this.dataorigin=data
    console.log(this.dataorigine)
    this.dataorigin.unshift({'Origine':'All'})
  })

   this.barChartData=[]
    this.isDataAvailable=false
  this.dash.post_comparaisonacceptance(Number(this.data1),this.choix).subscribe(
    data=>{
      console.log(data)
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
         d.data[Number(s.month)-1]=Number(s.TotalCharge)
       })
       console.log(d)
      d.label=this.data1
      d.backgroundColor='rgba(238, 83, 79, 1)'
       this.barChartData.push(d)
       this.isDataAvailable=true
       this.wait=false

   
     }





  )



  this.dash.post_comparaisonacceptance(Number(this.data2),this.choix).subscribe(
    data=>{
      console.log(data)
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
         d.data[Number(s.month)-1]=Number(s.TotalCharge)
       })
       console.log(d)
      d.label=this.data2
      d.backgroundColor='rgba(51,106,241)'

       this.barChartData.push(d)
       this.isDataAvailable=true

   
     }
  )
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
  selectann(item){
    this.data1=item
  }
  selectEventc(item){
    this.choix=item.Classification
  }

  selectEventca(item){
    this.choix=item.Canal
    
  }
  categorieselect(item){
   
  
    
      this.choix=item.Categorie

    

  }
  selectanne(item){
    this.data2=item
  }
  calculcanal(){
    this.popup3.hide()
    this.barChartData=[]
    this.isDataAvailable=false
  this.dash.post_comparaisoncanal(Number(this.data1),this.choix).subscribe(
    data=>{
      console.log(data)
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
         d.data[Number(s.month)-1]=Number(s.TotalCharge)
       })
       console.log(d)
      d.label=this.data1
      d.backgroundColor='rgba(238, 83, 79, 1)'

       this.barChartData.push(d)
       this.isDataAvailable=true

   
     }





  )



  this.dash.post_comparaisoncanal(Number(this.data2),this.choix).subscribe(
    data=>{
      console.log(data)
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
         d.data[Number(s.month)-1]=Number(s.TotalCharge)
       })
       console.log(d)
      d.label=this.data2
      d.backgroundColor='rgba(51,106,241)'

       this.barChartData.push(d)
       this.isDataAvailable=true

   
     }
  )




  
  }
  selectEventco(item){
    this.choix=item.Origine
  }
  calculorigine(){
    this.popup2.hide()
    this.barChartData=[]
    this.isDataAvailable=false
  this.dash.post_comparaisonorigin(Number(this.data1),this.choix).subscribe(
    data=>{
      console.log(data)
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
         d.data[Number(s.month)-1]=Number(s.TotalCharge)
       })
       console.log(d)
      d.label=this.data1
      d.backgroundColor='rgba(238, 83, 79, 1)'
       this.barChartData.push(d)
       this.isDataAvailable=true

   
     }





  )
  this.dash.post_comparaisonorigin(Number(this.data2),this.choix).subscribe(
    data=>{
      console.log(data)
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
         d.data[Number(s.month)-1]=Number(s.TotalCharge)
       })
       console.log(d)

      d.label=this.data2
      d.backgroundColor='rgba(51,106,241)'

       this.barChartData.push(d)
       this.isDataAvailable=true

   
     }





  )

  }
  calculclassification(){
  this.popup1.hide()
    this.barChartData=[]
    console.log(this.data1)
    console.log(this.choix)
    this.isDataAvailable=false
    this.dash.post_comparaison(Number(this.data1),this.choix).subscribe(data=>{
      console.log(data)
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
         d.data[Number(s.month)-1]=Number(s.TotalCharge)
       })
       console.log(d)
      d.label=this.data1
      d.backgroundColor='rgba(238, 83, 79, 1)'

       this.barChartData.push(d)
       this.isDataAvailable=true

   
     })
     this.dash.post_comparaison(Number(this.data2),this.choix).subscribe(data=>{
      console.log(data)
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
         d.data[Number(s.month)-1]=Number(s.TotalCharge)
       })
       console.log(d)
      d.label=this.data2
      d.backgroundColor='rgba(51,106,241)'

       this.barChartData.push(d)
       this.isDataAvailable=true

   
     })
     
     

  }
 
 

}
