import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { FormsModule } from "@angular/forms";
import { NgModel } from "@angular/forms";
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";


@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        CreateEmployeeComponent,
        UpdateEmployeeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        NgModel,
        HttpClient
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}