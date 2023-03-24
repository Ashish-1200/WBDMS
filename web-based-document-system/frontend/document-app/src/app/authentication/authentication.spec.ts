import { TestBed } from '@angular/core/testing';

import {authentication} from  './authentication';

describe('authentication', () => {
  let auth: authentication;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    auth = TestBed.inject(authentication);
  });

  it('should be created', () => {
    expect(auth).toBeTruthy();
  });
});