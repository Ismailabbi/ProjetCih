import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashbordService {
  Url:string="http://192.168.43.202:9090/CodeIgniter/api/dashboard"
  constructor(private httpClient: HttpClient) { }
  get_dashbord1():Observable<any[]>{
    return this.httpClient.get<any[]>(this.Url)
  }
}
