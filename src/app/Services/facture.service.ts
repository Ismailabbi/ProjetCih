import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from '../Models/Factures';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  Url:string="https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/facture"
  constructor(private httpClient: HttpClient) { }
  get_factures():Observable<Facture[]>{
    return this.httpClient.get<Facture[]>(this.Url)
  }
  get_date():Observable<any[]>
  {
    return this.httpClient.get<any[]>('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/BillingDate')
  }
  get_servicedescription():Observable<any[]>{
    return this.httpClient.get<any[]>('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/ServiceDescription')
  }
  get_event():Observable<any[]>
  {
    return this.httpClient.get<any[]>('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/EventDescription')
  }
  get_facutresP():Observable<any[]>{
    return this.httpClient.get<any[]>('https://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/facture_pre')
  }
  get_events():Observable<any[]>{
    return this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/events')
  }
}
