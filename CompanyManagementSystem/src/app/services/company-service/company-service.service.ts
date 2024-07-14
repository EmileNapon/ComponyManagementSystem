import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor( private http: HttpClient ) { }

  apiUrl='http://localhost:3000/Company'

getData(): Observable<Array<Company>>{
  return this.http.get<Array<Company>>(this.apiUrl)
}



}
