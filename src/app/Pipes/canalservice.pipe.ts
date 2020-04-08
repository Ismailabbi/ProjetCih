import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canalservice'
})
export class CanalservicePipe implements PipeTransform {

  transform(tableService: any[], canal:string): any {
    if(typeof canal==='undefined'){

    return tableService;}
    else {
      let nvsercive:any[]=[];
        console.log(canal)
          for(let facture of tableService){
            if(facture.Canal==canal){
          
              nvsercive.push(facture)
             }
          }   
       
      
      return  nvsercive
    }
  }

}
