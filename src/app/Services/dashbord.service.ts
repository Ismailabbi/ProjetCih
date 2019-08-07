import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashbordService {
  Url:string="http://192.168.43.202:9090/CodeIgniter/api/dashboard"
  Url2:string="http://192.168.43.202:9090/CodeIgniter/api/dashboard_service"
  constructor(private httpClient: HttpClient) { }
  get_dashbord1():Observable<any[]>{
    return this.httpClient.get<any[]>(this.Url)
  }
  get_dashbord2():Observable<any[]>{
    return this.httpClient.get<any[]>(this.Url2)
}
post_dashbord(a:number,b:number){
  console.log(b)
  return this.httpClient.post('http://192.168.43.202:9090/CodeIgniter/api/test',{"Mois": b,"Annee":a})
 
}
get_year():Observable<any[]>{
  return this.httpClient.get<any[]>("http://192.168.43.202:9090/CodeIgniter/api/year")
}


}
