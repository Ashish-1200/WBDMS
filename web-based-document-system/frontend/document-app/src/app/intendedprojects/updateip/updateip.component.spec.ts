import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateipComponent } from './updateip.component';

describe('UpdateipComponent', () => {
  let component: UpdateipComponent;
  let fixture: ComponentFixture<UpdateipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
