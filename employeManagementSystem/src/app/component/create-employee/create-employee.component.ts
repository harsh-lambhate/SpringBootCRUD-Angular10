import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../dto/employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      data => { this.goToEmployeeList(); },
      error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    if(this.employee.firstName!=undefined && this.employee.lastName!=undefined && this.employee.emailId!=undefined){
      console.log(this.employee);
      this.saveEmployee();
      alert("Employee Sucessfully created !!")
    }
    else{
      new Error("Fields are empty")
      console.log("Fields are empty")
      alert("Please enter all details")
    }
  
  }

}


