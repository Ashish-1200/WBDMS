import { TestBed } from '@angular/core/testing';

import { eventauth} from './event.auth';

describe('IncidentGuard', () => {
  let guard: eventauth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(eventauth);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});