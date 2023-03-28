import { TestBed } from '@angular/core/testing';

import { Equipauth} from './equip.auth';

describe('EquipGuard', () => {
  let guard: Equipauth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Equipauth);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});