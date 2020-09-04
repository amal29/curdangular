import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EditComponent } from './components/employee/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
