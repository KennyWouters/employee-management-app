import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import{Employee} from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{

  private apiUrl = `${environment.apiUrl}/employee`; // Adjusted to match the API endpoint
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    console.log('Making API request to:', this.apiUrl);
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployeeById(id: number): Observable<Employee> {
    console.log('Making API request to:', this.apiUrl);
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }


  createEmployee(employee: Employee): Observable<Employee[]> {
    return this.http.post<Employee[]>(this.apiUrl, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  editEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${employee.id}`, employee);
  }

}
