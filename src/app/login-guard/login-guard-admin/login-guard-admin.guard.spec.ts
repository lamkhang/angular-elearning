import { TestBed, async, inject } from '@angular/core/testing';

import { LoginGuardAdminGuard } from './login-guard-admin.guard';

describe('LoginGuardAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGuardAdminGuard]
    });
  });

  it('should ...', inject([LoginGuardAdminGuard], (guard: LoginGuardAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
