import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../Models/Service';

@Pipe({
  name: 'typeservice'
})
export class TypeservicePipe implements PipeTransform {

  transform(tableService:Service[], type: string): any {
    if(typeof type==='undefined'){
      console.log("salam")
    return tableService;}
    else {
      let nvsercive:Service[]=[];
      for(let i=0;i<tableService.length;i++){
        if(tableService[i].Typedeservice.replace(/ /g,'')==type.replace(/ /g,'')){
         nvsercive.push(tableService[i])
         console.log("haha")
        }
      }
      return  nvsercive
    }
  }

}
