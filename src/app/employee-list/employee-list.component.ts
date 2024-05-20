import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { NgFor } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor, HttpClientModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent  implements OnInit{

  employees!: Employee[];

  constructor (private employeeService: EmployeeService, private router: Router) {}

  getEmployeeList() {
    return this.employeeService.getEmployeesList().subscribe(data => {
      console.log(data);
      this.employees = data;
    }
    )
  }
  goToEmployeeList(){
    (<any>this.router).navigate(['/employees']);
  }

  ngOnInit(): void {
    this.getEmployeeList();
  }

}
