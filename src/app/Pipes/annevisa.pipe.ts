import { Pipe, PipeTransform } from '@angular/core';
import { FiltragevisaService } from '../Services/filtragevisa.service';

@Pipe({
  name: 'annevisa'
})
export class AnnevisaPipe implements PipeTransform {
  constructor(public filtragevisaService:FiltragevisaService ){} 

  transform(table: any[], Annee:string): any {

   if(typeof Annee==='undefined'){
    this.filtragevisaService.setmontantfiltre(table)

    return table;
   }
   else {
     if(Annee=="2018"){
       Annee='18'
      
     }
     if(Annee=="2019"){
       Annee='19'
       
     }
     console.log(Annee)
   let tablepipe:any[]=[]
   table.forEach(s=>{
    let a:String=new String(s.BillingPeriod)
    if(a.includes(Annee)){
      tablepipe.push(s)
      
    }
   })
   console.log(tablepipe)
   this.filtragevisaService.setmontantfiltre(tablepipe)

     return tablepipe
   

   }
 

  }

}
