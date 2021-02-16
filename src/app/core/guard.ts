import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AuthGuardService implements CanActivate {
  permisos: boolean = true;
  constructor(private _snackBar: MatSnackBar, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.permisos === false) {
      this._snackBar.open('Sin Permisos para navegar', 'Ok');

      return false;
    }
    return true;
  }
}
