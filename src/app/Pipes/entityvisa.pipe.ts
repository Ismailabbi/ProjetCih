import { Pipe, PipeTransform } from '@angular/core';
import { FiltragevisaService } from '../Services/filtragevisa.service';

@Pipe({
  name: 'entityvisa'
})
export class EntityvisaPipe implements PipeTransform {
  constructor(public filtragevisaService:FiltragevisaService ){} 
  transform(table: any[],entity:string): any {
    console.log("mok"+entity)
    if(typeof entity==='undefined'){
      this.filtragevisaService.setmontantfiltre(table)
 console.log("iwa")
      return table
    }
    else{
     let tablepipe:any[]=[]
     for(let i=0;i<table.length;i++){
       if(table[i].EntityType==entity){
         tablepipe.push(table[i])
       }
     }
          this.filtragevisaService.setmontantfiltre(tablepipe)
     return tablepipe

    }
  }

}
