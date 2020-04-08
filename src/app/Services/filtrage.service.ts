import { Injectable } from '@angular/core';
import { Facture } from '../Models/Factures';

@Injectable({
  providedIn: 'root'
})
export class FiltrageService {
   montanttotal:number=0
   nombrefacture:number=0
   Factures=[]
  constructor() {
     
   }
  setmontantfiltre(factures:any[] ){
    
    this.Factures=factures
    this.nombrefacture=this.Factures.length
   let total =0
    for(let facture of this.Factures){
      total=total+ parseFloat(facture.TotalCharge.replace(',',''))
    
    }
   
   this.montanttotal=total
   
  }
  calcultotal(factures:Facture[]){
    this.Factures=factures
   this.nombrefacture=this.Factures.length
   let total =0
   for(let facture of this.Factures){
    total=total+ parseFloat(facture.TotalCharge.replace(',','.'))
  
  }
  
 
 this.montanttotal=total
 console.log(this.montanttotal)


  }
}
