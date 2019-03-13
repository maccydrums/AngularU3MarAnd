import { Injectable } from '@angular/core';
import { AdminFull } from './models/admin-full.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  loggedUser: string;

  public admins:AdminFull[] = [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    password: '1234567890'
  }, {
    firstName: 'Kylie',
    lastName: 'Johnson',
    email: 'kylie.johnson@email.com',
    password: '0987654321'
  }];

  constructor() {
    console.log(this.admins);
  }

  //checks what we have in localStorage & if we have a user it returns 'user'
  checkIfLoggedIn():string {
    return localStorage.getItem('user');
  }

  //sets loggedUser to the users input in our LoginComponent
  public login(user:string):void {
    localStorage.setItem('user', user);
    this.loggedUser = user;
  }

  //deletes localStorage when you logout and sets loggedUser to undefined
  public logout(): void{
    localStorage.clear();
    this.loggedUser = undefined;
  }

}
