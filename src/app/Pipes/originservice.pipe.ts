import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'originservice'
})
export class OriginservicePipe implements PipeTransform {

  transform(tableService: any[], origine:string): any {
    if(typeof origine==='undefined'){

      return tableService;}
      else {
        console.log(origine)
        let nvsercive:any[]=[];

         for(let facture of tableService){
          if(facture.Origine==origine){
            nvsercive.push(facture)

          }
         }
        
        return  nvsercive
      }
    }

}
