import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent  implements OnInit{

  employees!: Employee[];

  constructor () {}
  ngOnInit(): void {
    this.employees = [
      {
          "id": 1,
          "firstName": "Zalumabo",
          "lastName": "Ndaba",
          "emailId": "zalu.ndaba@gmail.com"
      },
      {
          "id": 2,
          "firstName": "Sboniso",
          "lastName": "Ndaba",
          "emailId": "sboniso.ndaba@gmail.com"
      }
  ];

  }

}
