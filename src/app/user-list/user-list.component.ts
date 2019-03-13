import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  //receiving our array from dashboard
  @Input() user: string;

  constructor() { }

  ngOnInit() {
  }

  //variable with a boolean property so we can change the text color
  textColor: boolean = false;

  //function so we can toggle between textColor = true/false
  toggle() {
    this.textColor = !this.textColor;
  }

}
