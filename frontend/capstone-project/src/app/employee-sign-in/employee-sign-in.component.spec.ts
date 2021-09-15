import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSignInComponent } from './employee-sign-in.component';

describe('EmployeeSignInComponent', () => {
  let component: EmployeeSignInComponent;
  let fixture: ComponentFixture<EmployeeSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
