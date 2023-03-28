import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewformequipComponent } from './viewformequip.component';

describe('ViewformequipComponent', () => {
  let component: ViewformequipComponent;
  let fixture: ComponentFixture<ViewformequipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewformequipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewformequipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
