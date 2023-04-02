import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateipComponent } from './createip.component';

describe('CreateipComponent', () => {
  let component: CreateipComponent;
  let fixture: ComponentFixture<CreateipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
