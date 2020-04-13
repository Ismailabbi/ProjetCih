import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";  
import { Observable } from "rxjs";  
import { DashbordService } from 'src/app/Services/dashbord.service';

@Injectable({
  providedIn: 'root'
})
export class ResolvedataService implements Resolve<any> {

  constructor(public dash:DashbordService) { 
  
 
  }
  resolve(route: ActivatedRouteSnapshot): Observable<any> {  
    return  this.dash.post_comparaisonacceptance(2018,"");
  } 
}
