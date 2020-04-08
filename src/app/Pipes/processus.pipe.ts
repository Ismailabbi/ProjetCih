import { Pipe, PipeTransform } from '@angular/core';
import { FiltrageService } from '../Services/filtrage.service';

@Pipe({
  name: 'Famille'
})
export class ProcessusPipe implements PipeTransform {

  constructor( public filtreService:FiltrageService){}
  transform(tableService: any[], famille:string): any {
    if(typeof famille==='undefined'){
      this.filtreService.setmontantfiltre(tableService)

      return tableService;}
      else {
        let nvsercive:any[]=[];
      for( let facture of  tableService){
        if(facture.Famille==famille){
          nvsercive.push(facture)
          console.log(famille)
       }

      }
          
          
        
        this.filtreService.setmontantfiltre(nvsercive)
          console.log(nvsercive)
        return  nvsercive
      }
    }

}
