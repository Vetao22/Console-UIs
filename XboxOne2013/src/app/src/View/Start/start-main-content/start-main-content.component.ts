import { keyframes, style } from '@angular/animations';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../Services/UserService'
import { XboxAppService } from '../../../Services/XboxAppService';

@Component({
  selector: 'app-start-main-content',
  templateUrl: './start-main-content.component.html',
  styleUrls: ['./start-main-content.component.css']
})
export class StartMainContentComponent implements OnInit 
{
  AppService: XboxAppService;
  UsersService: UserService;
  @ViewChild('scrollContainer') ScrollContainer?: ElementRef;

  constructor() 
  {
    this.AppService = new XboxAppService();
    this.UsersService = new UserService();
  }

  ngOnInit(): void 
  {
    let nav = document.getElementsByTagName('nav')[0] as HTMLElement;
    let homeLink = nav.children[1] as HTMLElement;
    homeLink.click();
  }

  ngAfterViewChecked()
  {
    
  }

  Scroll(event: WheelEvent)
  {    
      event.preventDefault();
      
      if(this.ScrollContainer)
      {
          let e = this.ScrollContainer.nativeElement as HTMLElement;
          let scrollValue = e.offsetLeft + event.deltaY * .2;

          if(scrollValue < -1683)
          {
            scrollValue = -1683;
          }
          if(scrollValue > 45)
          {
            scrollValue = 45;
          }
          
          e.style.left = `${scrollValue}px`;
      }
  }

  ScrollToContainer(event: MouseEvent, containerClass: string)
  {
    event.preventDefault();

    let container = document.getElementsByClassName(containerClass)[0] as HTMLElement;
    let scrollContainer = document.getElementsByClassName('ScrollContainer')[0] as HTMLElement;    
    
    scrollContainer.animate([
      { left: scrollContainer.offsetLeft },
      { left: `${-container.offsetLeft + 75}px`}],
      { duration: 700, iterations: 1}).
        finished.then( () => scrollContainer.style.left = `${-container.offsetLeft + 75}px`);
  }
}
5