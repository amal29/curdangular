import { Injectable } from '@angular/core';
import { Student} from '../models/student.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:Student[]= [
    {
      id:1,
      name: "amal",
      course: "BCA",
      duration: 2014

    },
    {
      id:2,
      name: "vimal",
      course: "mca",
      duration: 2014

    }


     ];
  constructor() { }
  onGet(){

    return this.students;
  }

  onGetStudent(id:Number){
    return this.students.find(x=>x.id===id);

  }

  onUpdate(student:Student){
    let oldstudent= this.students.find(x=>x.id===student.id);
    oldstudent.name=student.name;
    oldstudent.course=student.course;
    oldstudent.duration=student.duration;



  }

  onAdd(student:Student){
    this.students.push(student);

  }
  onDelete(id:Number){
    let student= this.students.find(x=>x.id===id);
    let index=this.students.indexOf(student,0);
    this.students.splice(index,1);


  }
}
