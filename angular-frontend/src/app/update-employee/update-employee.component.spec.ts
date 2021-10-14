import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateEmployeeComponent } from './update-employee.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule} from '@angular/forms';

describe('UpdateEmployeeComponent', () => {
  let component: UpdateEmployeeComponent;
  let fixture: ComponentFixture<UpdateEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule,FormsModule],
      declarations: [ UpdateEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
