import { EmployeeService } from './employee.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employess: Employee[] = [];

  constructor(private employeeService: EmployeeService ){}

  ngOnInit(){ this.getEmployees(); }


  public getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employess = response;
        console.log(this.employess)
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }
}
