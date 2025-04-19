import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistGridComponent } from './specialist-grid.component';

describe('SpecialistGridComponent', () => {
  let component: SpecialistGridComponent;
  let fixture: ComponentFixture<SpecialistGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialistGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialistGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
