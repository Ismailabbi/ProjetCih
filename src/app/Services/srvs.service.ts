import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../Models/Service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrvsService {
 Url:string="http://localhost:3000/Services"

  constructor(private httpClient: HttpClient) { }
  get_services():Observable<Service[]>{
    return this.httpClient.get<Service[]>(this.Url)
  }
}
