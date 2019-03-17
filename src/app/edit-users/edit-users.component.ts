import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})

//sends Outputs to its parents (UserListComponent)
export class EditUsersComponent {
  //setting value to a empty string
  value:string = '';

  //sending data with EventEmitter to our dashboard.html
  @Output() newName = new EventEmitter<string>();
  @Output() removeName = new EventEmitter<string>();

  constructor() { }


  //function for removing a user and sending it to our dashboard with @Output()
  removeUser() {
    this.removeName.emit();
    this.value = '';
  }

  //function for adding a user and sending it to our dashboard with @Output()
  addUser() {
    this.newName.emit(this.value);
  }

}
