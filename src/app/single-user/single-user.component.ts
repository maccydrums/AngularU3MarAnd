import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})

//shows which username the user has clicked
export class SingleUserComponent {

  user:string;

  //receiving parameters by subscribing to params
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.user = params.id;
    })
  }
}
