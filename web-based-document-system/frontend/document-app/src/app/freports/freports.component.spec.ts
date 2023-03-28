import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreportsComponent } from './freports.component';

describe('FreportsComponent', () => {
  let component: FreportsComponent;
  let fixture: ComponentFixture<FreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
