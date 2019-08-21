import { Injectable } from '@angular/core';
//
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //
  private baseUrl = 'http://localhost:8080/employee';

  constructor(private http: HttpClient) { }
}
