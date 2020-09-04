import { Injectable } from '@angular/core';
import {Employee} from '../models/employee.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:Employee[]= [
    {
      id:1,
      name: "amal",
      email: "amal@gmail.com",
      phone: 8086962329
  
    },
    {
      id:2,
      name: "vimal",
      email: "vimal@gmail.com",
      phone: 8086962369
  
    }
    

     ];
  constructor() { }
  onGet(){
    
    return this.employees;
  }

  onGetEmployee(id:Number){
    return this.employees.find(x=>x.id===id);

  }

  onUpdate(employee:Employee){
    let oldemployee= this.employees.find(x=>x.id===employee.id);
    oldemployee.name=employee.name;
    oldemployee.email=employee.email;
    oldemployee.phone=employee.phone;



  }

  onAdd(employee:Employee){
    this.employees.push(employee);

  }
  onDelete(id:Number){
    let employee= this.employees.find(x=>x.id===id);
    let index=this.employees.indexOf(employee,0);
    this.employees.splice(index,1);


  }
}
