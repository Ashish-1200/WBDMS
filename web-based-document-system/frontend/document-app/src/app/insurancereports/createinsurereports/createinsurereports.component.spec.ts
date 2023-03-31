import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinsurereportsComponent } from './createinsurereports.component';

describe('CreateinsurereportsComponent', () => {
  let component: CreateinsurereportsComponent;
  let fixture: ComponentFixture<CreateinsurereportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateinsurereportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateinsurereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
