import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventfamille'
})
export class EventfamillePipe implements PipeTransform {

  transform(tableService: any[], famille:string): any {
    if(typeof famille==='undefined'){
    

      return tableService;}
      else {
        let nvsercive:any[]=[];
      for( let facture of  tableService){
        if(facture.Famille==famille){
          nvsercive.push(facture)
          console.log(famille)
       }

      }
          
          
        
       
          console.log(nvsercive)
        return  nvsercive
      }
    }

}
