import { Pipe, PipeTransform } from '@angular/core';
import { FiltrageService } from '../Services/filtrage.service';

@Pipe({
  name: 'orginepipe'
})
export class OrginepipePipe implements PipeTransform {
  constructor( public filtreService:FiltrageService){}

  transform(tableService: any[], origine:string): any {
    if(typeof origine==='undefined'){
      this.filtreService.setmontantfiltre(tableService)

      return tableService;}
      else {
        console.log(origine)
        let nvsercive:any[]=[];

         for(let facture of tableService){
          if(facture.Origine==origine){
            nvsercive.push(facture)

          }
         }
        
        this.filtreService.setmontantfiltre(nvsercive)
        return  nvsercive
      }
    }

}
