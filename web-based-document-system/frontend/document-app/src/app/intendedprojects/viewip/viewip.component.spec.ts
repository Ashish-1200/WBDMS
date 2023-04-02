import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewipComponent } from './viewip.component';

describe('ViewipComponent', () => {
  let component: ViewipComponent;
  let fixture: ComponentFixture<ViewipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
