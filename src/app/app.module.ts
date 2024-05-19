import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { FormsModule } from "@angular/forms";
import { NgModel } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        CreateEmployeeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        NgModel
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}