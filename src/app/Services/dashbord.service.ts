import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashbordService {
  Url:string="http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_classification"
  Url2:string="http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_service"
  constructor(private httpClient: HttpClient) { }
  get_dashbord1():Observable<any[]>{
    return this.httpClient.get<any[]>(this.Url)
  }
  get_dashbord2():Observable<any[]>{
    return this.httpClient.get<any[]>(this.Url2)
}
post_dashbord(a:number,b:number){
  console.log(b)
  return this.httpClient.post('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_service_timed',{"Mois": b,"Annee":a})
 
}
get_year():Observable<any[]>{
  return this.httpClient.get<any[]>("http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/year")
}
get_acceptance():Observable<any[]>{
  return this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_acceptance')
}
get_origin():Observable<any[]>{
  return this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_origine')
}
get_canal():Observable<any[]>{
  return this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_canal')
}
get_accfiable():Observable<any[]>{
  return this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/fiabilise/dashboard_acceptance')

}
}
