import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmployeeTable} from './employee-table/employee-table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'employee-management-app';
}
