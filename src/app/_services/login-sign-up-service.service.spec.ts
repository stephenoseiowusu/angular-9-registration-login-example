import { TestBed } from '@angular/core/testing';

import { LoginSignUpServiceService } from './login-sign-up-service.service';

describe('LoginSignUpServiceService', () => {
  let service: LoginSignUpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginSignUpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
