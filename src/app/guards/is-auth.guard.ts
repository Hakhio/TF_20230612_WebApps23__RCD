import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const isAuthGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isConnected
    ? true
    : inject(Router).navigateByUrl('login');
};
