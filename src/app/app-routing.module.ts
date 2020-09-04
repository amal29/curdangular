import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './components/employee/employee.component';
import { EditComponent } from './components/employee/edit/edit.component';

const routes: Routes = [
{path:'', component:EmployeeComponent},
{path:'employee/add/:id', component:EditComponent},
{path:'employee/edit/:id', component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
