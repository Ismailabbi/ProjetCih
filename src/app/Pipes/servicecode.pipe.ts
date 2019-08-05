import { Pipe, PipeTransform } from '@angular/core';
import { Facture } from '../Models/Factures';

@Pipe({
  name: 'servicecode'
})
export class ServicecodePipe implements PipeTransform {

  transform(tablefacture: Facture[],code:string): any {
    if(typeof code==='undefined'){
      
    return tablefacture;}
    else {
      let nvsercive:Facture[]=[];
      for(let i=0;i<tablefacture.length;i++){
        if(tablefacture[i].ServiceCodeDescription.replace(/ /g,'')==code.replace(/ /g,'')){
         nvsercive.push(tablefacture[i])
         
        }
      }
      return  nvsercive
    }
  }
  }


