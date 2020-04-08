import { Component, OnInit,ViewChild  } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label,Color } from 'ng2-charts';
import { DashbordService } from 'src/app/Services/dashbord.service';
import { SrvsService } from 'src/app/Services/srvs.service';
import { FactureService } from 'src/app/Services/facture.service';
import { ClassificationsService } from 'src/app/Services/classifications.service';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-compprv',
  templateUrl: './compprv.component.html',
  styleUrls: ['./compprv.component.css']
})
export class CompprvComponent implements OnInit {
  choixCalcule='Accepetance'
  datacategorie
/*   diblaed buttons*/
  classficationdiasabled:boolean=true
  origindisabled:boolean=false
  canaldisabled:boolean=false
  acceptancedisabled:boolean=false
  categoriedisabled:boolean=false
  familledisabled:boolean=false
  processusdisabled:boolean=false
  /*....*/
  processus:boolean=false
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
  classavailabale=true
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
  /*activeMethode Debut*/
  classificationactive(){
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
  @ViewChild('popup1',{static: true}) popup1: Popup;
  @ViewChild('popup2',{static: true}) popup2: Popup;
  @ViewChild('popup3',{static: true}) popup3: Popup;
  @ViewChild('popup4',{static: true}) popup4: Popup;
  @ViewChild('popup5',{static: true}) popup5: Popup;
  @ViewChild('popup6',{static: true}) popup6: Popup;
  @ViewChild('popup7',{static: true}) popup7: Popup;
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
/**finmethode**/
 
 /*CalculeMethode Debut*/
  calculprocessus(){
    this.choixCalcule='Processus'
    this.barChartData=[]
    this.isDataAvailable=false
    console.log(this.data1)
    console.log(this.choix)
  this.dash.post_comparaisonProcessusPv(Number(this.data1),this.choix).subscribe(data=>{
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
     if(this.data1!=this.data2){
     this.dash.post_comparaisonProcessusPv(Number(this.data2),this.choix).subscribe(data=>{
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
    this.popup1.hide()
    this.popup2.hide()
    this.popup3.hide()
    this.popup4.hide()
    this.popup5.hide()
    this.popup6.hide()
    this.popup7.hide()

     
       })}




  }

  calculfamille(){
    this.choixCalcule='Famille'
    this.barChartData=[]
    this.isDataAvailable=false
    console.log(this.data1)
    console.log(this.choix)
  this.dash.post_comparaisonfamillePv(Number(this.data1),this.choix).subscribe(data=>{
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
     if(this.data1!=this.data2){
     this.dash.post_comparaisonfamillePv(Number(this.data2),this.choix).subscribe(data=>{
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
  
  
     
       })}
       this.popup1.hide()
       this.popup2.hide()
       this.popup3.hide()
       this.popup4.hide()
       this.popup5.hide()
       this.popup6.hide()
       this.popup7.hide()

  }
  calculcategorie(){
    this.choixCalcule='Categorie'
    this.barChartData=[]
    this.isDataAvailable=false
    console.log(this.data1)
    console.log(this.choix)
  this.dash.post_comparaisoncategoriePv(Number(this.data1),this.choix).subscribe(data=>{
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
     if(this.data1!=this.data2){
  this.dash.post_comparaisoncategoriePv(Number(this.data2),this.choix).subscribe(data=>{
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
    )}
    this.popup1.hide()
    this.popup2.hide()
    this.popup3.hide()
    this.popup4.hide()
    this.popup5.hide()
    this.popup6.hide()
    this.popup7.hide()




  }
  calculacceptance(){
    this.choixCalcule='Acceptance'
    this.barChartData=[]
    this.isDataAvailable=false
  this.dash.post_comparaisonacceptancePrv(Number(this.data1),this.choix).subscribe( data=>{
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


   
     } )


     if(this.data1!=this.data2){
  this.dash.post_comparaisonacceptancePrv(Number(this.data2),this.choix).subscribe(data=>{
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
  )}
  this.popup1.hide()
    this.popup2.hide()
    this.popup3.hide()
    this.popup4.hide()
    this.popup5.hide()
    this.popup6.hide()
    this.popup7.hide()
  }
  calculcanal(){
    this.choixCalcule='Canal'
    this.barChartData=[]
    this.isDataAvailable=false
  this.dash.post_comparaisoncanalPrv(Number(this.data1),this.choix).subscribe( data=>{
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


   
     } )


     if(this.data1!=this.data2){
this.dash.post_comparaisoncanalPrv(Number(this.data2),this.choix).subscribe(data=>{
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
  )}



  this.popup1.hide()
    this.popup2.hide()
    this.popup3.hide()
    this.popup4.hide()
    this.popup5.hide()
    this.popup6.hide()
    this.popup7.hide()
  
  }
  calculorigine(){
    this.choixCalcule='Origin'
    console.log(this.choix)
    this.barChartData=[]
    this.isDataAvailable=false
  this.dash.post_comparaisonoriginPrv(Number(this.data1),this.choix).subscribe(data=>{
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
     if(this.data1!=this.data2){
  this.dash.post_comparaisonoriginPrv(Number(this.data2),this.choix).subscribe(data=>{
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



  

  )}
  this.popup1.hide()
  this.popup2.hide()
  this.popup3.hide()
  this.popup4.hide()
  this.popup5.hide()
  this.popup6.hide()
  this.popup7.hide()

  }
  calculclassification(){
  this.choixCalcule='Classification'
    this.barChartData=[]
    console.log(this.data1)
    console.log(this.choix)
    this.isDataAvailable=false
    this.dash.post_comparaisonPrv(Number(this.data1),this.choix).subscribe(data=>{
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
    if(this.data1!=this.data2){
   this.dash.post_comparaisonPrv(Number(this.data2),this.choix).subscribe(data=>{
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


   
     })}
     
     this.popup1.hide()
     this.popup2.hide()
     this.popup3.hide()
     this.popup4.hide()
     this.popup5.hide()
     this.popup6.hide()
     this.popup7.hide()

  }
 
  /**finMethode */
  show1(){
  
    this.popup1.options = {
      header: "Filtrage",
      cancleBtnContent: "Cancel", // the text on your cancel button

      color: "#f65900", // red, blue....
      widthProsentage: 80, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
  this.popup1.show(this.popup1.options);
  this.popup2.hide()
  this.popup3.hide()
  this.popup4.hide()
  this.popup5.hide()
  this.popup6.hide()
  this.popup7.hide()
  

  }
  
  show2(){
    console.log('ah')
    this.popup2.options = {
      header: "Filtrage",
      color: "#f65900", // red, blue....
      widthProsentage: 80, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
  this.popup1.hide()
  this.popup2.show(this.popup2.options);
  this.popup3.hide()
  this.popup4.hide()
  this.popup5.hide()
  this.popup6.hide()
  this.popup7.hide()

  }
  show3(){
    this.popup1.hide()
    this.popup2.hide()
    this.popup4.hide()
    this.popup5.hide()
    this.popup6.hide()
    this.popup7.hide()
    console.log('ah')
    this.popup3.options = {
      header: "Filtrage",
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
    this.popup1.hide()
    this.popup2.hide()
 this.popup3.hide()
    this.popup5.hide()
    this.popup6.hide()
    this.popup7.hide()
    console.log('ah')
    this.popup4.options = {
      header: "Filtrage",
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
    this.popup1.hide()
    this.popup2.hide()
    this.popup3.hide()

    this.popup4.hide()
    this.popup6.hide()
    this.popup7.hide()
    console.log('ah')
    this.popup5.options = {
      header: "Filtrage",
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
    this.popup1.hide()
    this.popup2.hide()
    this.popup3.hide()

    this.popup4.hide()
    this.popup5.hide()
 
    this.popup7.hide()
    console.log('ah')
    this.popup6.options = {
      header: "Filtrage",
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
    this.popup1.hide()
    this.popup2.hide()
    this.popup3.hide()

    this.popup4.hide()
    this.popup5.hide()
    this.popup6.hide()

    console.log('ah')
    this.popup7.options = {
      header: "Filtrage",
      color: "#f65900", // red, blue....
      widthProsentage: 80, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
  this.popup7.show(this.popup7.options);
  

  }

  /*selectedMethode*/
selectedfamille(item){
   

    this.choix=item.Famille
}
selectann(item){
  this.data1=item
}
selectEventa(item){
  this.choix=item.Acceptance
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

selectEventco(item){
  this.choix=item.Origine
}
  /**finMethode */

 
 
  
 
  
 
 
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

  
  
  public barChartData: ChartDataSets[] = [
   
  ];

  constructor(public dash:DashbordService,private SrvSrvsService:SrvsService,private FactureServicess:FactureService,public classifications:ClassificationsService) { }

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
this.classifications.getclassfication().subscribe( data=>{
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
  this.dash.post_comparaisonacceptancePrv(Number(this.data1),this.choix).subscribe( data=>{
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



  this.dash.post_comparaisonacceptancePrv(Number(this.data2),this.choix).subscribe(
    
    data=>{
      this.wait=false
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
  
 

 
 
 

 



 

}
