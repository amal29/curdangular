import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor( private employeService:EmployeeService) { }
  employees:Employee[];
  

  ngOnInit(): void {

   this.employees= this.employeService.onGet();
  }
  onDelete(id:Number){
    console.log(id);
    
    this.employeService.onDelete(id);

  }

}
