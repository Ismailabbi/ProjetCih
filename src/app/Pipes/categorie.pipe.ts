import { Pipe, PipeTransform } from '@angular/core';
import { FiltrageService } from '../Services/filtrage.service';

@Pipe({
  name: 'categorie'
})
export class CategoriePipe implements PipeTransform {
  constructor( public filtreService:FiltrageService){}

  transform(tableService: any[], categorie:string): any {
    if(typeof categorie==='undefined'){
      this.filtreService.setmontantfiltre(tableService)
      return tableService;}
      else {
        let nvsercive:any[]=[];
      for( let facture of  tableService){
        if(facture.Categorie==categorie){
          nvsercive.push(facture)
          
       }

      }
          
          
        
        this.filtreService.setmontantfiltre(nvsercive)
          console.log(nvsercive)
        return  nvsercive
      }
    }
}
