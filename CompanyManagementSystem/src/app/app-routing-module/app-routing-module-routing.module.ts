import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from '../component/company/company-list/company-list.component';
import { DepartmentListComponent } from '../component/department/department-list/department-list.component';
import { CompanyDetailComponent } from '../component/company/company-detail/company-detail.component';
import { DepartmentDetailComponent } from '../component/department/department-detail/department-detail.component';
import { EmployeeListComponent } from '../component/employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from '../component/employee/employee-detail/employee-detail.component';




const routes: Routes = [ 
{ path: 'companies', component: CompanyListComponent },
{ path: 'companies/:id', component: CompanyDetailComponent },
{ path: '', component: DepartmentListComponent },
{ path: 'departments/:id', component: DepartmentDetailComponent },
{ path: 'employees', component: EmployeeListComponent },
{ path: 'employees/:id', component: EmployeeDetailComponent },
{ path: '', redirectTo: '/companies', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleRoutingModule { }
