import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancereportComponent} from './insurancereport.component';

describe('InsurancereportsComponent', () => {
  let component: InsurancereportComponent;
  let fixture: ComponentFixture<InsurancereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsurancereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
