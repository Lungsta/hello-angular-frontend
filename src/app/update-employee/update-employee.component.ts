import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  employee: Employee = new Employee();
  id: number = 0;

  constructor(private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(s => {
      console.log("ID: " + s["id"])
      this.id = s["id"]
    });

    this.getEmployeeById(this.id);
  }
  

  getEmployeeById(id: number) {
    return this.employeeService.getEmployeeById(id).subscribe(data=> {
      console.log(data);
      this.employee = data;
    }, 
  error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  saveEmployee() {
    this.employeeService.updateEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }

}
