import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CreateEmployeeComponent } from './create-employee.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeListComponent } from '../employee-list/employee-list.component';


describe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;
  let employeeService: EmployeeService;
  let httpClient: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      declarations: [CreateEmployeeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    employeeService = new EmployeeService(httpClient);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Inserted employee', () => {


    const employeeNew: Employee = {
      id: 12,
      firstName: 'testing',
      lastName: 'testing',
      emailId: 'test@gmail.com'
    }
    component.employee = employeeNew;
    component.onSubmit();
    expect(component.saveEmployee()).not.toBeNull();
  });

});
