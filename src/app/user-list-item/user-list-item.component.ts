import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})

//render all items we recieve from UserListComponent
export class UserListItemComponent {
  //receives one user from our array through the *ngFor loop in user-list.component
  @Input() users: string;

  //recieves the boolean value so we can toggle the text color
  @Input() textColor: boolean;
  constructor() { }

}
