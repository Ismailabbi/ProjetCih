import { Pipe, PipeTransform } from '@angular/core';
import { FiltrageService } from '../Services/filtrage.service';


@Pipe({
  name: 'processusmaster'
})
export class ProcessusmasterPipe implements PipeTransform {

  constructor( public filtreService:FiltrageService){}
  transform(tableService: any[], processus:string): any {
    if(typeof processus==='undefined'){
      this.filtreService.setmontantfiltre(tableService)

      return tableService;}
      else {
        let nvsercive:any[]=[];
      for( let facture of  tableService){
        if(facture.Processus==processus){
          nvsercive.push(facture)
          console.log(processus)
       }

      }
          
          
        
        this.filtreService.setmontantfiltre(nvsercive)
          console.log(nvsercive)
        return  nvsercive
      }
    }

}
