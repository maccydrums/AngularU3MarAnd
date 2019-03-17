import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  //The array with our users
  users: string[] = ['Knatte', 'Fnatte', 'Tjatte'];
  loggedUser: string;

  // gets the value of loggedUser in authService
  constructor(private authService: AuthService) {
    this.loggedUser = this.authService.checkIfLoggedIn();
  }

  //adding a new user to our array with parameters/data from edit-users (@Output() newName = new EventEmitter<string>();)
  newUser(user: string): void{
    this.users.push(user);
  }

  //removes the last user from our array with ---.--- ^
  removeUsername(): void {
    this.users.pop();
  }

}
