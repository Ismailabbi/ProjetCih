import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventprocessus'
})
export class EventprocessusPipe implements PipeTransform {

  transform(tableService: any[], processus:string): any {
    if(typeof processus==='undefined'){
    

      return tableService;}
      else {
        let nvsercive:any[]=[];
      for( let facture of  tableService){
        if(facture.Processus==processus){
          nvsercive.push(facture)
          console.log(processus)
       }

      }
          
          
  
          console.log(nvsercive)
        return  nvsercive
      }
    }
}
