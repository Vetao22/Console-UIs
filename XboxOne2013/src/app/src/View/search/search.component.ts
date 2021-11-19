import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit 
{
  Keys?: Array<String>;

  constructor() 
  {
     this.FillKeys();
  }

  FillKeys()
  {
    this.Keys = new Array<String>();

    //Numbers
    for(let x = 0; x < 10; x++)
    {
      this.Keys.push(x.toString());
    }

    this.Keys.push('q');
    this.Keys.push('w');
    this.Keys.push('e');
    this.Keys.push('r');
    this.Keys.push('t');
    this.Keys.push('y');
    this.Keys.push('u');
    this.Keys.push('i');
    this.Keys.push('o');
    this.Keys.push('p');
    this.Keys.push('a');
    this.Keys.push('s');
    this.Keys.push('d');
    this.Keys.push('f');
    this.Keys.push('g');
    this.Keys.push('h');
    this.Keys.push('j');
    this.Keys.push('k');
    this.Keys.push('l');
    this.Keys.push('ç');
    this.Keys.push('z');
    this.Keys.push('x');
    this.Keys.push('c');
    this.Keys.push('v');
    this.Keys.push('b');
    this.Keys.push('n');
    this.Keys.push('m');
    this.Keys.push(',');
    this.Keys.push('.');
    this.Keys.push('"');
  }

  ngOnInit(): void {
  }

}
