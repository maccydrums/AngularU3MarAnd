import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {
  //receives one user from our array through the *ngFor loop in user-list.component
  @Input() user: string;

  //recieves the boolean value so we can toggle the text color
  @Input() textColor: boolean;
  constructor() { }

}
