import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../Models/Service';

@Pipe({
  name: 'canal'
})
export class CanalPipe implements PipeTransform {

  transform(tableService: any[], canal:string): any {
    if(typeof canal==='undefined'){
    return tableService;}
    else {
      let nvsercive:any[]=[];
      for(let i=0;i<tableService.length;i++){
        
        if(tableService[i].Canal.replace(/ /g,'')==canal.replace(/ /g,'')){
          
         nvsercive.push(tableService[i])
        }
      }
      return  nvsercive
    }
  }

}
