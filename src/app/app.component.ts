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
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public openModal(employee: Employee, mode: String): void {
    const container = document.getElementById('main-container')
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal')
    if(mode === 'add') {
      button.setAttribute('data-target','#addEmployeeModal')
    }
    if(mode === 'edit') {
      button.setAttribute('data-target','#updateEmployeeModal')
    }
    if(mode === 'delete') {
      button.setAttribute('data-target','#deleteEmployeeModal')
    }
    container?.appendChild(button);
  }




}
