import { Component, OnInit } from '@angular/core';
import { SuboordonneServiceService } from 'src/app/services/suboordonned/suboordonne-service.service';

@Component({
  selector: 'app-suboordonne-list',
  templateUrl: './suboordonne-list.component.html',
  styleUrls: ['./suboordonne-list.component.css']
})
export class SuboordonneListComponent implements OnInit {
  constructor(private sr:SuboordonneServiceService){}
  public listCompany:Array<any>=[]

  ngOnInit(): void {
    this.getData() 
  }
  
  getData(){
    return this.sr.getData().subscribe({
      next:data=>{ this.listCompany=data}, error:err=>{console.error('kkkk')}})
  }
  

}
