import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefreportsComponent } from './updatefreports.component';

describe('UpdatefreportsComponent', () => {
  let component: UpdatefreportsComponent;
  let fixture: ComponentFixture<UpdatefreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatefreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
