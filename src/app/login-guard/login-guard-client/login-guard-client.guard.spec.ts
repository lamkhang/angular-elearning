import { TestBed, async, inject } from '@angular/core/testing';

import { LoginGuardClientGuard } from './login-guard-client.guard';

describe('LoginGuardClientGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGuardClientGuard]
    });
  });

  it('should ...', inject([LoginGuardClientGuard], (guard: LoginGuardClientGuard) => {
    expect(guard).toBeTruthy();
  }));
});
