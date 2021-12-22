import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/src/Services/UserService';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit
 {
  UsersService: UserService;

  @ViewChild('flexContainer') flexContainer?: ElementRef;
  
  constructor() 
  {
    this.UsersService = new UserService();
  }

  ngOnInit(): void 
  {
  
  }

  Scroll(event: WheelEvent)
  {    

      event.preventDefault();
      
      if(this.flexContainer)
      {
          let e = this.flexContainer.nativeElement as HTMLElement;
          
          e.scroll(0, 30 * event.deltaY);          
      }

      
  }

}
