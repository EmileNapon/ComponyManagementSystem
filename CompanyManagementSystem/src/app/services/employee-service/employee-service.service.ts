import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  apiUrl='http://localhost:3000/Employees'
  constructor(private http : HttpClient) { }

  getData():Observable<Array<any>>{
     return this.http.get<Array<any>>(this.apiUrl)
  }
}
