import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../Models/Service';

@Pipe({
  name: 'acceptance'
})
export class AcceptancePipe implements PipeTransform {

  transform(tableService: any[], acceptance:string): any {
    if(typeof acceptance==='undefined'){
      return tableService;}
      else {
        console.log(acceptance)
        let nvsercive:any[]=[];
        for(let i=0;i<tableService.length;i++){
          
          if(tableService[i].Acceptance.replace(/ /g,'')==acceptance.replace(/ /g,'')){
            
           nvsercive.push(tableService[i])
          }
        }
        return  nvsercive
      }
    }


}
