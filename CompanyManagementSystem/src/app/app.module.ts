import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompanyListComponent } from './component/company/company-list/company-list.component';
import { CompanyDetailComponent } from './component/company/company-detail/company-detail.component';
import { EmployeeListComponent } from './component/employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './component/employee/employee-detail/employee-detail.component';
import { DepartmentListComponent } from './component/department/department-list/department-list.component';
import { DepartmentDetailComponent } from './component/department/department-detail/department-detail.component';
import{HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { SuboordonneListComponent } from './component/suboordoned/suboordonne-list/suboordonne-list.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    DepartmentListComponent,
    DepartmentDetailComponent,
    SuboordonneListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), AppRoutingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
