import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventnum'
})
export class EventnumPipe implements PipeTransform {

  transform(tableService: any[], name:string): any {
    if(typeof name==='undefined'){
    return tableService;}
    else {
      let nvsercive:any[]=[];
      for(let i=0;i<tableService.length;i++){
        
        if(tableService[i].NumEvent.replace(/ /g,'')==name.replace(/ /g,'')){
          
         nvsercive.push(tableService[i])
        }
      }
      return  nvsercive
    }
  }
}
