import { CanDeactivateFn } from '@angular/router';

export const leaveGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return confirm("Voulez-vous quitter ?");
};
