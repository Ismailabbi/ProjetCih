import { Pipe, PipeTransform } from '@angular/core';
import {Facture} from '../../../src/app/Models/Factures'

@Pipe({
  name: 'pipedate'
})
export class PipedatePipe implements PipeTransform {

  transform(tablefacture: Facture[], event:string): any {
    if(typeof event==='undefined'){
      console.log("zahra1")
      return tablefacture;}
      else {
        console.log("zahra2")
  console.log(event)
        let nvsercive:Facture[]=[];
        for(let i=0;i<tablefacture.length;i++){
          if(tablefacture[i].BillingCycleDate.includes(event)){
           nvsercive.push(tablefacture[i])
           
          }
        }
        return  nvsercive
      }
  }
  }


