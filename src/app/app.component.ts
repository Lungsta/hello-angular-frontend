import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppRoutesModule } from './app.routes';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeListComponent, CreateEmployeeComponent, AppRoutesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello Angular Front End';
  currentYear: number = new Date().getFullYear();
}
