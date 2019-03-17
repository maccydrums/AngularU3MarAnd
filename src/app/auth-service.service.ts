import { Injectable } from '@angular/core';
import { AdminFull } from './models/admin-full.model';
import { AdminLogin } from './models/admin-login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

//logic for login/logout and our users
export class AuthService {

  loggedUser: string;

  constructor(private router: Router) {
  }


  public admins:AdminFull[] = [{
    firstName: 'Marcus',
    lastName: 'Andersson',
    email: 'wewe@live.com',
    password: '1234567890'
  }, {
    firstName: 'Kylie',
    lastName: 'Johnson',
    email: 'marcus@live.com',
    password: '1111111111'
  }];


  //checks what we have in localStorage & if we have a user it returns 'user'
  checkIfLoggedIn():string {
    return localStorage.getItem('user');
  }

  //sets loggedUser to our login input (user.email) from our LoginComponent in localStorage
  public login(user:AdminLogin) {
    let loggedUser = this.checkStatus(user);
    if (loggedUser.length) {
      localStorage.setItem('user', user.email);
      this.router.navigateByUrl('/dashboard');
    }
  }

  //checks if the users input (email + pw) is the same as the admins in our admins array ^
  private checkStatus(user:AdminLogin){
    const newAdminsArr = this.admins.filter((admin) => {
      if (admin.email === user.email && admin.password === user.password) {
        return admin;
      }
    });
    return newAdminsArr;
  }

  //deletes localStorage when you logout and sets loggedUser to undefined
  public logout(): void{
    localStorage.clear();
    this.loggedUser = undefined;
  }
}
