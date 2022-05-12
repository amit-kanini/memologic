import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApproachComponent } from './new-approach.component';

describe('NewApproachComponent', () => {
  let component: NewApproachComponent;
  let fixture: ComponentFixture<NewApproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewApproachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
