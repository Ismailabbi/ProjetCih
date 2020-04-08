import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MontantserviceService {
  Url:string="http://effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/SommeMC"
  Urlvis:string="http://effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/SommeV"

  constructor(private httpClient: HttpClient) { }
 getinfoMc():Observable<any[]>{
   return this.httpClient.get<any[]>(this.Url)
 }
getinfoVs():Observable<any[]>{
  return this.httpClient.get<any[]>(this.Urlvis
    )
}
}
