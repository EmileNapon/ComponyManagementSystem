import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementServiceService {
  apiUrl='http://localhost:3000/Department'
  constructor(private http : HttpClient) { }

  getData():Observable<Array<any>>{
     return this.http.get<Array<any>>(this.apiUrl)
  }
}