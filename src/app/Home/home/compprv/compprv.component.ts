import { Component, OnInit,ViewChild,TemplateRef   } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label,Color } from 'ng2-charts';
import { DashbordService } from 'src/app/Services/dashbord.service';
import { SrvsService } from 'src/app/Services/srvs.service';
import { FactureService } from 'src/app/Services/facture.service';
import { ClassificationsService } from 'src/app/Services/classifications.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-compprv',
  templateUrl: './compprv.component.html',
  styleUrls: ['./compprv.component.css']
})
export class CompprvComponent implements OnInit {
  affiche:boolean=false
  choixCalcule='Accepetance'
  datacategorie
  modalRef: BsModalRef;


 
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

 

 




 
 /*CalculeMethode Debut*/
  calculprocessus(){
    let ver:boolean

    this.affiche=false
    this.choixCalcule='Processus'
    this.barChartData=[]
    this.isDataAvailable=false
  
  this.dash.post_comparaisonProcessusPv(Number(this.data1),this.choix).subscribe(data=>{
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
       })
       
      d.label=this.data1
      d.backgroundColor='rgba(238, 83, 79, 1)'

      d.data.forEach(element => {
             console.log(element)
           if(element!='0'){
             ver=true
           }  
          });
        if(ver){
          this.barChartData.push(d)
          if(this.data1!=this.data2){
            this.dash.post_comparaisonProcessusPv(Number(this.data2),this.choix).subscribe(data=>{
               
               let  d:any={}
               d.data=[0,0,0,0,0,0,0,0,0]
                let dataArray:Array<any>=Object.values(data)
                dataArray.forEach(s=>{
                  d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
                })
                
               d.label=this.data2
               d.backgroundColor='rgba(51,106,241)'
       
                this.barChartData.push(d)
                this.isDataAvailable=true
              this.wait=false
       
       
            
              })}
          this.isDataAvailable=true
        }
        else {
          this.affiche=true
        }  
   
     })
    




  }

  calculfamille(){
    let ver:boolean

    this.affiche=false
    this.choixCalcule='Famille'
    this.barChartData=[]
    this.isDataAvailable=false
    
  this.dash.post_comparaisonfamillePv(Number(this.data1),this.choix).subscribe(data=>{
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
       })
      d.label=this.data1
      d.backgroundColor='rgba(238, 83, 79, 1)'

      
      d.data.forEach(element => {
             console.log(element)
           if(element!='0'){
             ver=true
           }  
          });
        if(ver){
          this.barChartData.push(d)
          if(this.data1!=this.data2){
            this.dash.post_comparaisonfamillePv(Number(this.data2),this.choix).subscribe(data=>{
              
               let  d:any={}
               d.data=[0,0,0,0,0,0,0,0,0]
                let dataArray:Array<any>=Object.values(data)
                dataArray.forEach(s=>{
                  d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
                })
              
               d.label=this.data2
               d.backgroundColor='rgba(51,106,241)'
       
                this.barChartData.push(d)
                this.isDataAvailable=true
                this.wait=false
         
         
            
              })}
       
          this.isDataAvailable=true
        }
        else {
          this.affiche=true
        }  


   
     })
   

  }
  calculcategorie(){
    let ver:boolean

    this.affiche=false
    this.choixCalcule='Categorie'
    this.barChartData=[]
    this.isDataAvailable=false
  
  this.dash.post_comparaisoncategoriePv(Number(this.data1),this.choix).subscribe(data=>{
  
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
       })
     
      d.label=this.data1
      d.backgroundColor='rgba(238, 83, 79, 1)'

      d.data.forEach(element => {
             console.log(element)
           if(element!='0'){
             ver=true
           }  
          });
        if(ver){
          this.barChartData.push(d)
          if(this.data1!=this.data2){
            this.dash.post_comparaisoncategoriePv(Number(this.data2),this.choix).subscribe(data=>{
                  
                  let  d:any={}
                  d.data=[0,0,0,0,0,0,0,0,0]
                   let dataArray:Array<any>=Object.values(data)
                   dataArray.forEach(s=>{
                    d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
                   })
                  
                  d.label=this.data2
                  d.backgroundColor='rgba(51,106,241)'
          
                   this.barChartData.push(d)
                   this.isDataAvailable=true
                   this.wait=false
            
            
               
                 }
              )}
             
          this.isDataAvailable=true
        }
        else {
          this.affiche=true
        }  


   
     })
   



  }
  calculacceptance(){
    let ver:boolean

    this.affiche=false
    this.choixCalcule='Acceptance'
    this.barChartData=[]
    this.isDataAvailable=false
  this.dash.post_comparaisonacceptancePrv(Number(this.data1),this.choix).subscribe( data=>{
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
       })
      d.label=this.data1
      d.backgroundColor='rgba(238, 83, 79, 1)'
      let ver:boolean
      d.data.forEach(element => {
             console.log(element)
           if(element!='0'){
             ver=true
           }  
          });
        if(ver){
          this.barChartData.push(d)
          if(this.data1!=this.data2){
            this.dash.post_comparaisonacceptancePrv(Number(this.data2),this.choix).subscribe(data=>{
                let  d:any={}
                d.data=[0,0,0,0,0,0,0,0,0]
                 let dataArray:Array<any>=Object.values(data)
                 dataArray.forEach(s=>{
                  d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
                 })
                d.label=this.data2
                d.backgroundColor='rgba(51,106,241)'
          
                 this.barChartData.push(d)
                 this.isDataAvailable=true
                 this.wait=false
          
          
             
               }
            )}
           
          this.isDataAvailable=true
        }
        else {
          this.affiche=true
        }  
    


   
     } )


 
  }

  calculcanal(){
    let ver:boolean

    this.affiche=false
    this.choixCalcule='Canal'
    this.barChartData=[]
    this.isDataAvailable=false
  this.dash.post_comparaisoncanalPrv(Number(this.data1),this.choix).subscribe( data=>{
      
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
       })
      d.label=this.data1
      d.backgroundColor='rgba(238, 83, 79, 1)'

      d.data.forEach(element => {
             console.log(element)
           if(element!='0'){
             ver=true
           }  
          });
        if(ver){
          this.barChartData.push(d)
          if(this.data1!=this.data2){
            this.dash.post_comparaisoncanalPrv(Number(this.data2),this.choix).subscribe(data=>{
                  let  d:any={}
                  d.data=[0,0,0,0,0,0,0,0,0]
                   let dataArray:Array<any>=Object.values(data)
                   dataArray.forEach(s=>{
                    d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
                   })
                  d.label=this.data2
                  d.backgroundColor='rgba(51,106,241)'
            
                   this.barChartData.push(d)
                   this.isDataAvailable=true
            
               
                 }
              )}
          this.isDataAvailable=true
        }
        else {
          this.affiche=true
        }  
     

   
     } )


  



  
  }


  calculorigine(){
    let ver:boolean

    this.affiche=false
    this.choixCalcule='Origin'
    this.barChartData=[]
    this.isDataAvailable=false
  this.dash.post_comparaisonoriginPrv(Number(this.data1),this.choix).subscribe(data=>{
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
       })
      d.label=this.data1
      d.backgroundColor='rgba(238, 83, 79, 1)'

      d.data.forEach(element => {
        console.log(element)
      if(element!='0'){
        ver=true
      }  
     });
   if(ver){
     this.barChartData.push(d)
     if(this.data1!=this.data2){
      this.dash.post_comparaisonoriginPrv(Number(this.data2),this.choix).subscribe(data=>{
         
          let  d:any={}
          d.data=[0,0,0,0,0,0,0,0,0]
           let dataArray:Array<any>=Object.values(data)
           dataArray.forEach(s=>{
            d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)           })
          d.label=this.data2
          d.backgroundColor='rgba(51,106,241)'
          
          
          this.barChartData.push(d)
          this.isDataAvailable=true
          this.wait=false  
       
         }
    
    
    
      
    
      )}
     this.isDataAvailable=true
   }
   else {
     this.affiche=true
   }  

   
     })
 


  }

  calculclassification(){
    this.affiche=false
  this.choixCalcule='Classification'
    this.barChartData=[]
    let ver:boolean=false

    this.isDataAvailable=false
    this.dash.post_comparaisonPrv(Number(this.data1),this.choix).subscribe(data=>{
      console.log(this.choix)
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
         d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
       })
      d.label=this.data1
      d.backgroundColor='rgba(238, 83, 79, 1)'
      d.data.forEach(element => {
             console.log(element)
           if(element!='0'){
             ver=true
           }  
          });
        if(ver){
          this.barChartData.push(d)
          if((this.data1!=this.data2)){
      console.log('salam')
   this.dash.post_comparaisonPrv(Number(this.data2),this.choix).subscribe(data=>{
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)       })
      d.label=this.data2
      d.backgroundColor='rgba(51,106,241)'

       this.barChartData.push(d)
       this.isDataAvailable=true
       this.wait=false


   
     })}
          this.isDataAvailable=true
        }
        else {
          this.affiche=true
        }  
      

   
     })
     
    
     
     

  }
 
  /**finMethode */
  

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

  constructor(public dash:DashbordService,private SrvSrvsService:SrvsService,private FactureServicess:FactureService,public classifications:ClassificationsService,private modalService: BsModalService ) { 
    

  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
this.classifications.getclassfication().subscribe( data=>{
      this.dataclassification=data
      this.datasclass=data
      this.datasclass.unshift({'Classification':'All'})
    }
  )
  this.classifications.getorigine().subscribe(data=>{
    this.dataorigin=data
    this.dataorigin.unshift({'Origine':'All'})
  })

   this.barChartData=[]
    this.isDataAvailable=false
  this.dash.post_comparaisonacceptancePrv(Number(this.data1),this.choix).subscribe( data=>{
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
       })
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
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
       })
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
