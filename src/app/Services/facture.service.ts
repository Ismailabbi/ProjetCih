import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from '../Models/Factures';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  Url:string="http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/facture"
  constructor(private httpClient: HttpClient) { }
  get_factures():Observable<Facture[]>{
    return this.httpClient.get<Facture[]>(this.Url)
  }
}
