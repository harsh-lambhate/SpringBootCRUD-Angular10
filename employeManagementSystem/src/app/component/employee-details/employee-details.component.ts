import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../dto/employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit{

  id !:number;
  employee :Employee=new Employee();

  constructor(private employeeService:EmployeeService,
    private activatedRouter:ActivatedRoute){
  }

  ngOnInit(): void {
      this.id=this.activatedRouter.snapshot.params['id'];

      this.employeeService.getEmployeeById(this.id).subscribe(data=>{
        this.employee=data;
      },
        error=>console.log(error));
      
  }    

}
