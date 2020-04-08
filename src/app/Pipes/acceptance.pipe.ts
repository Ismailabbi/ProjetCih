import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../Models/Service';
import { FiltrageService } from '../Services/filtrage.service';
import { FiltragevisaService } from '../Services/filtragevisa.service';

@Pipe({
  name: 'acceptance'
})
export class AcceptancePipe implements PipeTransform {
  constructor( public filtreService:FiltrageService,public filtragevisaService:FiltragevisaService){}

  transform(tableService: any[], acceptance:string): any {
    if(typeof acceptance==='undefined'){
      this.filtreService.setmontantfiltre(tableService)

      return tableService;}
      else {
        console.log(acceptance)
        let nvsercive:any[]=[];
        for(let facture of  tableService){
          if(facture.Acceptance==acceptance){
            nvsercive.push(facture)
          }
        }
        
        this.filtreService.setmontantfiltre(nvsercive)
        console.log(nvsercive)
        return  nvsercive
      }
    }


}
