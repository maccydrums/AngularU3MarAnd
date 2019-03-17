import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { AdminLogin } from '../models/admin-login.model';
import { AdminFull } from '../models/admin-full.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//component that handles our login/create a new user/logout
export class LoginComponent {
  userName:string;
  model: AdminLogin = new AdminLogin('','');
  createNewUser: AdminFull = new AdminFull('','','','');
  regForm:boolean = true;


  //checks the value of this userName from authService
  constructor(private authServiceService: AuthService) {
    this.userName = this.authServiceService.checkIfLoggedIn();
  }

  //login function that sends the users input (model/AdminLogin) to authService
  onSubmit():void {
    this.authServiceService.login(this.model);
  }

  // calling the logout function in authService
  logout(): void {
    this.authServiceService.logout();
  }

  //simple toggle function so we can change the login form to the create a new user-form
  toggleForms() {
    this.regForm = !this.regForm;
  }

  //pushes our model for AdminFull (createNewUser) to our admins in authService
  createNewUserAdmin(){
    this.authServiceService.admins.push(this.createNewUser);
    this.toggleForms();
  }
}
