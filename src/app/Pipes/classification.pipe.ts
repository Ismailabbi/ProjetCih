import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../Models/Service';

@Pipe({
  name: 'classification'
})
export class ClassificationPipe implements PipeTransform {

  transform(tableService: Service[], classfication:string): any {
    if(typeof classfication==='undefined'){
    return tableService;}
    else {
      let nvsercive:Service[]=[];
      for(let i=0;i<tableService.length;i++){
        
        if(tableService[i].Classification.replace(/ /g,'')==classfication.replace(/ /g,'')){
          
         nvsercive.push(tableService[i])
        }
      }
      return  nvsercive
    }
  }

}
