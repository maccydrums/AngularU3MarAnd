import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loggedUser:string;
  userName:string;

  //checks the value of this userName from authService
  constructor(private authServiceService: AuthService) {
    this.userName = this.authServiceService.checkIfLoggedIn();

  }

  // checks if the users password is atleast 10 characters and contains one number. If true = value of loggedUser -> authService
  login(): void {
    let checkNumber = this.loggedUser.search(/\d+/);
    if(this.loggedUser.length >= 10 && checkNumber > 0) {
      this.authServiceService.login(this.loggedUser);
    } else {
      alert("Your username must have atleast 10 characters and contain one number! Please try again!");
    }
  }

  // calling the logout function in authService
  logout(): void {
    this.authServiceService.logout();
  }

}
