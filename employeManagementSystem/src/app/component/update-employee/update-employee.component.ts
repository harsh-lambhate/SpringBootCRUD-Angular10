import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../dto/employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {

  id!:number;
  employee: Employee=new Employee();

  constructor(
    private employeeService:EmployeeService,
    private activatedRouter:ActivatedRoute,
    private router:Router){

  }

  ngOnInit(): void {
      this.id=this.activatedRouter.snapshot.params['id'];

      this.employeeService.getEmployeeById(this.id).subscribe(data=>{
        this.employee=data;
      },
        error=>console.log(error))
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.goToEmployList();
    },
      error=>{console.log(error)}
    )
  }

  goToEmployList(){
    this.router.navigate(['/employees']);
  }
}
