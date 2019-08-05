import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../Models/Service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrvsService {
 Url:string="http://192.168.43.202:9090/CodeIgniter/api/product"

  constructor(private httpClient: HttpClient) { }
  get_services():Observable<Service[]>{
    return this.httpClient.get<Service[]>(this.Url)
  }
}
