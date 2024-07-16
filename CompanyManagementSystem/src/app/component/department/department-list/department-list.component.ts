import { Component, OnInit } from '@angular/core';
import { DepartementServiceService } from 'src/app/services/department-service/departement-service.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public listCompany:Array<any>=[]
    constructor( private sr: DepartementServiceService){}
ngOnInit(): void {
  this.getData() 
}

getData(){
  return this.sr.getData().subscribe({
    next:data=>{ this.listCompany=data}, error:err=>{console.error('kkkk')}})
}

}
