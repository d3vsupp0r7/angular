import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
//
import { EmployeeListComponent } from './employee-list/employee-list.component';
//
import { TemplateDrivenFormExampleComponent } from './template-driven-form-example/template-driven-form-example.component';


const routes: Routes = [
  //
  { path: 'add', component: CreateEmployeeComponent },
  //
  { path: 'employees', component: EmployeeListComponent },
  //
  { path: 'templatedrivenform', component: TemplateDrivenFormExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
