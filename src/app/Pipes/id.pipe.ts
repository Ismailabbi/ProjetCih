import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {

  transform(tableService: any[], name:string): any {
    if(typeof name==='undefined'){
    return tableService;}
    else {
      let nvsercive:any[]=[];
      for(let i=0;i<tableService.length;i++){
        
        if(tableService[i].IDService.replace(/ /g,'')==name.replace(/ /g,'')){
          
         nvsercive.push(tableService[i])
        }
      }
      return  nvsercive
    }
  }

}
