import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nameToDisplay = 'Frankn Pants';

  constructor() { }

  ngOnInit() {
  }
  login() {
    this.nameToDisplay = window.prompt('Enter your name');
  }
  logout(){
    this.nameToDisplay = '';
  }

}
