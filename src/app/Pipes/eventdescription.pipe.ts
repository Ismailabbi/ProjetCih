import { Pipe, PipeTransform } from '@angular/core';
import {Facture} from '../../../src/app/Models/Factures'
import { FiltrageService } from '../Services/filtrage.service';

@Pipe({
  name: 'eventdescription'
})
export class EventdescriptionPipe implements PipeTransform {
constructor( public filtreService:FiltrageService){}
  transform(tablefacture: Facture[], event:string): any {
    if(typeof event==='undefined'){
      this.filtreService.setmontantfiltre(tablefacture)

      return tablefacture;}
      else {
        let nvsercive:Facture[]=[];
        for(let i=0;i<tablefacture.length;i++){
          if(tablefacture[i].EventDescription.replace(/ /g,'')==event.replace(/ /g,'')){
           nvsercive.push(tablefacture[i])
           
          }
        }
        this.filtreService.setmontantfiltre(nvsercive)
        return  nvsercive
      }
  }

}
