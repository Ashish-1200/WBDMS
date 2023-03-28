import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateformequipComponent } from './createformequip.component';

describe('CreateformequipComponent', () => {
  let component: CreateformequipComponent;
  let fixture: ComponentFixture<CreateformequipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateformequipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateformequipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
