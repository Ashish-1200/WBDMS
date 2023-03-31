import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinsurereportsComponent } from './updateinsurereports.component';

describe('UpdateinsurereportsComponent', () => {
  let component: UpdateinsurereportsComponent;
  let fixture: ComponentFixture<UpdateinsurereportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateinsurereportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateinsurereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
