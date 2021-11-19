import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/src/Services/UserService';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit 
{
  UsersService: UserService;

  constructor() 
  {
    this.UsersService = new UserService();
  }

  ngOnInit(): void {
  }

}
