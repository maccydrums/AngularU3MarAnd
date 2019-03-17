import { Component, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

//renders our users we get from jsonplaceholder via our subscription on Observables, and sends a boolean till user-list-item so we can toggle the text color
export class UserListComponent {
  @Input() user: string;
  textColor: boolean = false;
  users: void;
  usersFailed: string;

  //recieves our users from our subscription on Observables
  constructor(private UsersService:UsersService) {
      this.UsersService.getUsers().subscribe(
          (response) => this.users = response,
          (error) => this.jsonFailed(error));
  }

  //recieves error.status if we cant get our users from jsonplaceholder
  jsonFailed(error: any): void {
    this.usersFailed = error.status;
  }

  //function so we can toggle between textColor = true/false
  toggle() {
    this.textColor = !this.textColor;
  }

}
