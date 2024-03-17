import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../dto/employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  
  employees !: Employee[];

  constructor(private employeeService : EmployeeService,
    private router:Router){

  }

  ngOnInit(): void {
    this.getEmployees();
  }
  
  private getEmployees(){
    this.employeeService.getAllEmployees().subscribe(data=>{
      console.log(this.employees)
      this.employees=data;
    })
  }

  updateEmployee(id:number){
    console.log(id)
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id : number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
     console.log(data);
     alert("Data deleted succesfully !!")
     this.getEmployees();
    })
  }

  employeeDetails(id : number){
    console.log(id)
    this.router.navigate(['employee-details',id]);
  }

}
