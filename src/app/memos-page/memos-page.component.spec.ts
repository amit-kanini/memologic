import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemosPageComponent } from './memos-page.component';

describe('MemosPageComponent', () => {
  let component: MemosPageComponent;
  let fixture: ComponentFixture<MemosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
