import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/UserService';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit 
{
  UsersService: UserService;
  
  constructor() 
  {
    this.UsersService = new UserService();
  }

  ngOnInit(): void 
  {
  }

}
