import { Pipe, PipeTransform } from '@angular/core';
import { Facture } from '../Models/Factures';
import { FiltrageService } from '../Services/filtrage.service';

@Pipe({
  name: 'servicecode'
})
export class ServicecodePipe implements PipeTransform {
     constructor(public filtrageservice:FiltrageService){}
  transform(tablefacture: Facture[],code:string): any {
    if(typeof code==='undefined'){
      this.filtrageservice.setmontantfiltre(tablefacture)

    return tablefacture;}
    else {
      console.log("else")
      let nvsercive:Facture[]=[];
      for(let i=0;i<tablefacture.length;i++){
        if(tablefacture[i].ServiceCodeDescription.replace(/ /g,'')==code.replace(/ /g,'')){
         nvsercive.push(tablefacture[i])
         
        }
      }
      this.filtrageservice.setmontantfiltre(nvsercive)

      return  nvsercive

    }

  }
  }


