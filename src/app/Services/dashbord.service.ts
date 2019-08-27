import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashbordService {
  Url:string="https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_classification"
  Url2:string="https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_service"
  constructor(private httpClient: HttpClient) { }
  get_dashbord1():Observable<any[]>{
    return this.httpClient.get<any[]>(this.Url)
  }
  get_dashbord2():Observable<any[]>{
    return this.httpClient.get<any[]>(this.Url2)
}
post_dashbord(a:number,b:number){
  console.log(b)
  return this.httpClient.post('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_service_timed',{"Mois": b,"Annee":a,'Critere':'Origine'})
 
}
post_service(a:number,b:number){
  return this.httpClient.post('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_service_timed',{"Mois": b,"Annee":a,'Critere':'ServiceNAME'})

}
post_classification(a:number,b:number){
  return this.httpClient.post('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_service_timed',{"Mois": b,"Annee":a,'Critere':'Classification'})

}
post_accep(a:number,b:number){
  return this.httpClient.post('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_service_timed',{"Mois": b,"Annee":a,'Critere':'Acceptance'})
}
post_origin(a:number,b:number){
  return this.httpClient.post('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_service_timed',{"Mois": b,"Annee":a,'Critere':'Origine'})

}
post_canal(a:number,b:number){
  return this.httpClient.post('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_service_timed',{"Mois": b,"Annee":a,'Critere':'Canal'})

}
get_year():Observable<any[]>{
  return this.httpClient.get<any[]>("https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/year")
}
get_acceptance():Observable<any[]>{
  return this.httpClient.get<any[]>('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_acceptance')
}
get_origin():Observable<any[]>{
  return this.httpClient.get<any[]>('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_origine')
}
get_canal():Observable<any[]>{
  return this.httpClient.get<any[]>('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_canal')
}
get_accfiable():Observable<any[]>{
  return this.httpClient.get<any[]>('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/fiabilise/dashboard_acceptance')

}
get_originfiable():Observable<any[]>{
  return this.httpClient.get<any[]>('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/fiabilise/dashboard_origine')

}
get_canalfiable(a:number,b:number)
{
  console.log(b)
  return this.httpClient.post('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/Dashboard_service_timed',{"Mois": b,"Annee":a,'Critere':'Canal'})
}
get_classffiable():Observable<any[]>{
  return this.httpClient.get<any[]>('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/fiabilise/dashboard_classification')
}
get_servicefiable():Observable<any[]>{
  return this.httpClient.get<any[]>('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/fiabilise/dashboard_service')
}
post_serviceP(a:number,b:number){
  return this.httpClient.post('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/fiabilise/Dashboard_service_timed',{"Mois": b,"Annee":a,'Critere':'ServiceNAME'})

}
post_classificationP(a:number,b:number){
  return this.httpClient.post('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/fiabilise/Dashboard_service_timed',{"Mois": b,"Annee":a,'Critere':'Classification'})

}
post_accepP(a:number,b:number){
  return this.httpClient.post('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/fiabilise/Dashboard_service_timed',{"Mois": b,"Annee":a,'Critere':'Acceptance'})
}
post_originP(a:number,b:number){
  return this.httpClient.post('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/fiabilise/Dashboard_service_timed',{"Mois": b,"Annee":a,'Critere':'Origine'})

}
post_canalP(a:string=null,b:number=null,c:string=null,d:string=null){
  return this.httpClient.post('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/fiabilise/Dashboard_service_timed',{"Acceptance": a,"Annee":b,'Classification':c,'Service':d,'Canal':'','Origine':'','Mois':''})

}
post_specification(a:string,b:string,c:string,d:string){
  return this.httpClient.post('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/fiabilise/Dashboard_service_timed',{"Mois": b,"Annee":a,'Critere':'Canal'})

}


}
