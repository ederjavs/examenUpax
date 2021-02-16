import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import * as moment from 'moment';



@Injectable()
export class AuthGuard implements CanActivate {

    acceso:boolean = true

    constructor(private router: Router,) { }

    canActivate() {
       
        if (this.acceso) {
          if (moment() < moment(3600)) {
            this.router.navigate(['/home']);
            return false;
          } else {
            

            return true;
          }
        }

        this.router.navigate(['auth/empleados']);
        return false;
    }
}
