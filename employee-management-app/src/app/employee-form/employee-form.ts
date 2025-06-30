import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Employee} from '../../Models/employee';
import {EmployeeService} from '../employee';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeForm {

  employee: Employee = {
    id: 0,
    firstName: "",
    lastName: '',
    email: '',
    phoneNumber: '',
    position: ''
  }

  constructor(private employeeService: EmployeeService) { }

  onSubmit() {
    console.log(this.employee);

    //TODO add logic to create an employee

    this.employeeService.createEmployee(this.employee)
      .subscribe((result) => console.log(result));
  }
}
