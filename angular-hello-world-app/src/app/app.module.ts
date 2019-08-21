import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TemplateDrivenFormExampleComponent } from './template-driven-form-example/template-driven-form-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    TemplateDrivenFormExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
