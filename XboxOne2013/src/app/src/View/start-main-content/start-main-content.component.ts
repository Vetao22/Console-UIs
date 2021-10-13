import { Component, OnInit } from '@angular/core';
import { XboxAppService } from '../../Services/XboxAppService';

@Component({
  selector: 'app-start-main-content',
  templateUrl: './start-main-content.component.html',
  styleUrls: ['./start-main-content.component.css']
})
export class StartMainContentComponent implements OnInit 
{
  AppService = new XboxAppService();

  constructor() { }

  ngOnInit(): void 
  {
  
  }

}
