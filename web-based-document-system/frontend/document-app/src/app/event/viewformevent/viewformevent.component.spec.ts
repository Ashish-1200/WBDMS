import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewformeventComponent } from './viewformevent.component';

describe('ViewformeventComponent', () => {
  let component: ViewformeventComponent;
  let fixture: ComponentFixture<ViewformeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewformeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewformeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
