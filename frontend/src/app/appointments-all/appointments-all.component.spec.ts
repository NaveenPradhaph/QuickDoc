import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsAllComponent } from './appointments-all.component';

describe('AppointmentsAllComponent', () => {
  let component: AppointmentsAllComponent;
  let fixture: ComponentFixture<AppointmentsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentsAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
