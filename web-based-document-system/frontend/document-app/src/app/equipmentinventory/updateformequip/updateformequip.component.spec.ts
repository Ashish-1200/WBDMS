import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateformequipComponent } from './updateformequip.component';

describe('UpdateformequipComponent', () => {
  let component: UpdateformequipComponent;
  let fixture: ComponentFixture<UpdateformequipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateformequipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateformequipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
