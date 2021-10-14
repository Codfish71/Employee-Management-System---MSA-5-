import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeService } from '../employee.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeListComponent } from './employee-list.component';
import { FormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../employee';


describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let employeeService:EmployeeService ;
  let employeeList:Employee[];
  let leng:number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[],
      imports: [HttpClientTestingModule,RouterTestingModule,FormsModule],
      declarations: [ EmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Get employee', () => {
   employeeList = component.employees;
   
   expect(employeeList).not.toBeNull();
  });

  
});
