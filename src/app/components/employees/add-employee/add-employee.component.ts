import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})


export class AddEmployeeComponent implements OnInit {

 AddEmpReq :Employee ={
id:'',
name:'',
email:'',
phone:0,
salary:0,
department:''
 };
  constructor(private empservice : EmployeesService,private route :Router){

  }
  ngOnInit(): void {
    
  }

  AddEmployee(){
    this.empservice.AddEmployee(this.AddEmpReq)
    .subscribe({
      next:(employee)=>{   
       this.route.navigate(['employees'])
      }
   
    })
  }
}
