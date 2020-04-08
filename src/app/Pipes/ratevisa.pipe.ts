import { Pipe, PipeTransform } from '@angular/core';
import { FiltragevisaService } from '../Services/filtragevisa.service';

@Pipe({
  name: 'ratevisa'
})
export class RatevisaPipe implements PipeTransform {
  constructor(public filtragevisaService:FiltragevisaService ){} 
  transform(table:any[],rate:string): any {
      if(typeof rate==='undefined'){
        this.filtragevisaService.setmontantfiltre(table)
        return table
      }
      else{
        let tablepipe:any[]=[];
          for(let i=0;i<table.length;i++){
            if(table[i].RateType==rate){
              tablepipe.push(table[i])
            }
          }
          this.filtragevisaService.setmontantfiltre(tablepipe)
          return tablepipe
      }
  }

}
