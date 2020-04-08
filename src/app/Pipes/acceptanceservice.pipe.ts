import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acceptanceservice'
})
export class AcceptanceservicePipe implements PipeTransform {

  transform(tableService: any[], acceptance:string): any {
    if(typeof acceptance==='undefined'){
    

      return tableService;}
      else {
        console.log(acceptance)
        let nvsercive:any[]=[];
        for(let facture of  tableService){
          if(facture.Acceptance==acceptance){
            nvsercive.push(facture)
          }
        }
        
        console.log(nvsercive)
        return  nvsercive
      }
    }

}
