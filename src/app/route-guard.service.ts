import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})

//routeGuard thats blocks access to several urls if the user isn't logged in
export class RouteGuardService implements CanActivate {

  constructor(public router: Router, private authServiceService: AuthService) {
  }

  //gets the value of loggedUser in authService. If there isn't a value/'user' is undefined you're navigated to the LoginComponent
  canActivate(): boolean {
    let authorized = this.authServiceService.checkIfLoggedIn();
    if (!authorized) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
