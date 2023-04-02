import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees :Employee[] =[];
constructor(private employeeservice :EmployeesService){

}
ngOnInit():void {
  this.employeeservice.getAllEmployees()
  .subscribe({

  next:(employees)=>{
  this.employees=employees;
    
  },error:(Response)=>{
    console.log(Response);
  }

  })
}
}
