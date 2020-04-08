import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }
  get_users():Observable<any[]>{
    return this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/administration/get_all')

}

delete(id){
  return this.httpClient.delete('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/administration/suppression/'+id)
}
update( firstname:string ,Password:string,profil:string,id:string){
  return this.httpClient.put('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/administration/update',{Username:firstname,Password:Password,Profile:profil,Id:id})

}
create(firstname:string,profil:string,mdp:string){
  return this.httpClient.post('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/administration/creation',{Username:firstname,Password:mdp,Profile:profil})
}
}
