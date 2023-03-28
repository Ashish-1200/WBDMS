import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateformeventComponent } from './updateformevent.component';

describe('UpdateformeventComponent', () => {
  let component: UpdateformeventComponent;
  let fixture: ComponentFixture<UpdateformeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateformeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateformeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
