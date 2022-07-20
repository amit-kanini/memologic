import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltaappComponent } from './deltaapp.component';

describe('DeltaappComponent', () => {
  let component: DeltaappComponent;
  let fixture: ComponentFixture<DeltaappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeltaappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltaappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
