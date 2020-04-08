import { Pipe, PipeTransform } from '@angular/core';
import { FiltragevisaService } from '../Services/filtragevisa.service';

@Pipe({
  name: 'visamois'
})
export class VisamoisPipe implements PipeTransform {
  constructor(public filtragevisaService:FiltragevisaService ){} 

  transform(table:any[],mois:string): any {
    if(typeof mois==='undefined'){
      this.filtragevisaService.setmontantfiltre(table)

      return table
    }
   else {
    
    if(mois=="Janvier"){
      mois="January"
    }
    if(mois=="Fevrier"){
      mois="February"
    }
    if(mois=="Mars"){
      mois="March"
    }
    if(mois=="Avril"){
      mois="April"
    }
    if(mois=="Mai"){
      mois="May"
    } 
    if(mois=="Juin"){
      mois="June"
    }
    if(mois=="Juillet"){
      mois="July"
    }
    if(mois=="Aout"){
      mois="August"
    }
    if(mois=="Septembre"){
      mois='September'
    }
    if(mois=="Novembre"){
      mois='November'
    }
    if(mois=="Decembre"){
      mois='December'
    }

    
 let tablepipe:any[]=[]
 table.forEach(s=>{
   let a:String=new String(s.BillingPeriod)
   if(a.includes(mois)){
     tablepipe.push(s)
   }

 })
 console.log(tablepipe)
 this.filtragevisaService.setmontantfiltre(tablepipe)
   return tablepipe

   }


  }

}
