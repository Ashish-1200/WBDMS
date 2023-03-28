import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefreportsComponent } from './createfreports.component';

describe('CreatefreportsComponent', () => {
  let component: CreatefreportsComponent;
  let fixture: ComponentFixture<CreatefreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatefreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatefreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
