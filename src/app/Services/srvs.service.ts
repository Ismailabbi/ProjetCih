import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../Models/Service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrvsService {
 Url:string="http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/service"

  constructor(private httpClient: HttpClient) { }
  getorigine():Observable<any[]>
  {
    return this.httpClient.get<any[]>("http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/Origine")
  }
  get_services():Observable<Service[]>{
    return this.httpClient.get<Service[]>(this.Url)
  }
  getservicename():Observable<any[]>{
    return this.httpClient.get<any[]>("http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/service")
  }
  gettypeservice():Observable<any[]>
  {
    return this.httpClient.get<any[]>("http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/typedeservice")
  }
  getclassfication():Observable<any[]>
  {
    return this.httpClient.get<any[]>("http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/classification")
  }
  getAcceptance():Observable<any[]>{
    return this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/Acceptance')
  }
getCanal():Observable<any[]> {
  return this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/Canal')
}

}
