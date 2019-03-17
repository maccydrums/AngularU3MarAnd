import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})

//shows which username the user has clicked
export class SingleUserComponent {
  users: Object;
  userId: string;
  usersFailed: string = '';

  //receiving parameters by subscribing to params
  constructor(private route: ActivatedRoute, private UsersService:UsersService) {
    this.route.params.subscribe(params => {
      this.userId = params.id;
    })
    //recieves information about the user we clicked on (from our subscription on Observables)
    this.UsersService.getUser(this.userId).subscribe(
        (response) => this.users = response,
        (error) => this.usersFailed = error.message);
  }




}
