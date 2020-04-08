import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassificationsService {
listecategorie:any[]
  constructor(private httpClient: HttpClient) { 
    
  
  }


  //liste des sous-elements de categorie
  get_Categorie():Observable<any[]>{
  
    return this.httpClient.get<any[]>('http://effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/Categorie')
  }
//liste des sous-elements de Processus
  get_Processus():Observable<any[]>{
    return this.httpClient.get<any[]>('http://effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/Processus')
  }
//liste des sous-elements de Famille

  get_Famille():Observable<any[]>{
    return this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/Famille')
  }
//liste des sous-elements de canal

  getCanal():Observable<any[]> {
    return this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/Canal')
  }
  //liste des sous-elements de acceptance
  getAcceptance():Observable<any[]>{
    return this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/Acceptance')
  }

  getorigine():Observable<any[]>
  {
    return this.httpClient.get<any[]>("http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/Origine")
  }
  getclassfication():Observable<any[]>
  {
    return this.httpClient.get<any[]>("http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/classification")
  }
}
