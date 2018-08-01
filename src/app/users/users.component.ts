import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService : UserDataService) { }
  userData:Object;
  ngOnInit() {
    this.userService.getUsers().subscribe((data)=>this.userData=data);
  }
}
