import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Employee} from '../../Models/employee';
import {EmployeeService} from '../employee';
import {Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-employee-form',
  imports: [FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeForm implements OnInit {

  employee: Employee = {
    id: 0,
    firstName: "",
    lastName: '',
    email: '',
    phoneNumber: '',
    position: ''
  }

  isEditing: boolean = false;



  errorMessage: string = '';

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private route: ActivatedRoute
              ) { }


  ngOnInit() {
    this.route.paramMap.subscribe((result) => {
      const id = result.get('id')

      if (id){
        // If we have an ID, we are editing an existing employee
        this.isEditing = true;

        this.employeeService.getEmployeeById(Number(id)).subscribe({
          next: (result) => this.employee = result,
          error: (error) => this.errorMessage = `Error Occured (${error.status})`,
        })
      }
    });
  }

  onSubmit() {

    if (this.isEditing) {
      // If we are editing, call the editEmployee method
      this.employeeService.editEmployee(this.employee)
        .subscribe({
          next: () => {
            this.router.navigate((['/']));
          },
          error: (error) => {
            console.error(error);
            this.errorMessage = `Error Occured (${error.status})`;
          }
        });
    } else {
      this.employeeService.createEmployee(this.employee)
        .subscribe({
          next: () => {
            this.router.navigate((['/']));

          },

          error: (error) => {
            console.error(error);
            this.errorMessage = `Error Occured (${error.status})`;

          }
        });
    }


  }
}
