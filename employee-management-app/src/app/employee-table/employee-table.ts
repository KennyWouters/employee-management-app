import { Component, OnInit } from '@angular/core';
import { Employee} from '../../Models/employee';
import {EmployeeService} from '../employee';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-employee-table',
  imports: [CommonModule],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css'
})
export class EmployeeTable implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    // Add some mock data for testing
    this.employees = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phoneNumber: '123-456-7890',
        position: 'Developer'
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        phoneNumber: '098-765-4321',
        position: 'Manager'
      }
    ];

    console.log('Initial employees:', this.employees);

    // Try to load from API with a delay to see the mock data first
    setTimeout(() => {
      this.employeeService.getEmployees().subscribe({
        next: (data: any) => {
          console.log('Raw API Response:', data);
          console.log('Response type:', typeof data);
          console.log('Response length:', data?.length);
          console.log('Is array?', Array.isArray(data));
          
          // Only update if we get valid data with actual employee objects
          if (data && Array.isArray(data) && data.length > 0 && data[0].id) {
            this.employees = data;
            console.log('Employees loaded from API:', data);
          } else {
            console.log('API returned invalid data, keeping mock data');
            console.log('Current employees:', this.employees);
          }
        },
        error: (error) => {
          console.error('Error loading employees from API:', error);
          console.log('Keeping mock data due to API error');
        }
      });
    }, 2000); // 2 second delay
  }
}
