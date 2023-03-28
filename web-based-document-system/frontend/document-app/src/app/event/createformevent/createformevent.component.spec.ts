import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateformeventComponent } from './createformevent.component';

describe('CreateformeventComponent', () => {
  let component: CreateformeventComponent;
  let fixture: ComponentFixture<CreateformeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateformeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateformeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
