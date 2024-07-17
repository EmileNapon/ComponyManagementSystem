import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuboordonneListComponent } from 'src/app/component/suboordoned/suboordonne-list/suboordonne-list.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuboordonneServiceService {

constructor( private http: HttpClient ) { }

  apiUrl='http://localhost:3000/Suboordonned'

getData(): Observable<Array<SuboordonneListComponent>>{
  return this.http.get<Array<SuboordonneListComponent>>(this.apiUrl)
}

}
