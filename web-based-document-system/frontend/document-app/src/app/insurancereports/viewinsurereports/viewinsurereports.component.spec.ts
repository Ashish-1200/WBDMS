import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinsurereportsComponent } from './viewinsurereports.component';

describe('ViewinsurereportsComponent', () => {
  let component: ViewinsurereportsComponent;
  let fixture: ComponentFixture<ViewinsurereportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewinsurereportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewinsurereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
