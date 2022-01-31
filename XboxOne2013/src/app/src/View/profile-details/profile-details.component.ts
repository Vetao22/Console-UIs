import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../../Models/User';
import { UserService } from '../../Services/UserService';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit 
{
  UsersService: UserService;
  User: User;
  @ViewChild('scrollContainer') ScrollContainer?: ElementRef;

  constructor() 
  {
    this.UsersService = new UserService();
    this.User = this.UsersService.LoggedUser;    
  }

  ngOnInit(): void {
  }

  Scroll(event: WheelEvent)
  {    
      event.preventDefault();
      
      if(this.ScrollContainer)
      {
          let e = this.ScrollContainer.nativeElement as HTMLElement;
          let scrollValue = e.offsetLeft + event.deltaY * .2;

          if(scrollValue < -1400)
          {
            scrollValue = -1400;
          }
          if(scrollValue > 0)
          {
            scrollValue = 0;
          }

          console.log(scrollValue);
          
          e.style.left = `${scrollValue}px`;
      }
  }


}
