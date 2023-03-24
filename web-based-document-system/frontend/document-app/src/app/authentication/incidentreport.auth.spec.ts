import { TestBed } from '@angular/core/testing';

import { Incidentreportauth} from './incidentreport.auth';

describe('IncidentGuard', () => {
  let guard: Incidentreportauth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Incidentreportauth);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});