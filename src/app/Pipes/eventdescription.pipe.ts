import { Pipe, PipeTransform } from '@angular/core';
import {Facture} from '../../../src/app/Models/Factures'
@Pipe({
  name: 'eventdescription'
})
export class EventdescriptionPipe implements PipeTransform {

  transform(tablefacture: Facture[], event:string): any {
    if(typeof event==='undefined'){
      
      return tablefacture;}
      else {
        let nvsercive:Facture[]=[];
        for(let i=0;i<tablefacture.length;i++){
          if(tablefacture[i].EventDescription.replace(/ /g,'')==event.replace(/ /g,'')){
           nvsercive.push(tablefacture[i])
           
          }
        }
        return  nvsercive
      }
  }

}
