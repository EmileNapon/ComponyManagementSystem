import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/services/employee-service/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(private sr:EmployeeServiceService){

  }
  
  public listCompany:Array<any>=[]
  ngOnInit(): void {
    this.getData() 
  }
  
  getData(){
    return this.sr.getData().subscribe({
      next:data=>{ this.listCompany=data}, error:err=>{console.error('kkkk')}})
  }
  

}
