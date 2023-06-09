import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Employee } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

baseApiUrl: string = environment.BaseapiURl;

constructor(private http:HttpClient) { }

getAllEmployees(): Observable<Employee[]> {
return this.http.get<Employee[]>(this.baseApiUrl + '/api/Employees');
  }

  AddEmployee(AddEmpReq:Employee): Observable<Employee> {
    AddEmpReq.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseApiUrl + '/api/Employees/',AddEmpReq);
      }


}
