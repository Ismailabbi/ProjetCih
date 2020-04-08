import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltragevisaService {
montanttotal:number=0
nombrefacture:number=0
  constructor() { }

  setmontantfiltre(factures:any[]){
    this.nombrefacture=factures.length
   let total =0
    for(let facture of factures){
      total=total+ parseFloat(facture.Total.replace(',',''))
    
    }
    this.montanttotal=total
}
calcultotal(factures:any[]){
  this.nombrefacture=factures.length
  let total=0
  for(let facture of factures){
    total=total+ parseFloat(facture.Total.replace(',','.'))
  }
  this.montanttotal=total
}
}