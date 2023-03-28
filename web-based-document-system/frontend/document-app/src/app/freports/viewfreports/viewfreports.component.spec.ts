import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfreportsComponent } from './viewfreports.component';

describe('ViewfreportsComponent', () => {
  let component: ViewfreportsComponent;
  let fixture: ComponentFixture<ViewfreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
