import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from 'src/app/services/company-service/company-service.service';
import { Company } from 'src/app/models/company.model';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {


c:any

 public listCompany:Array<any>=[]
  constructor(private sr:CompanyServiceService){

  }
  ngOnInit() {
    this.sr.getData().subscribe({
      next:data=>{ this.listCompany=data}, error:err=>{console.error('kkkk')}
      
    })
    
  }

}
