import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  test:string = "First";
  constructor() { }

  ngOnInit() {
  }
  share(){
    console.log("i just Click it");
    this.test = "share test ";
  }
  dep(){
    console.log("i just Click it");
    this.test = "pomming Heelo ";
  }
  loan(){
    console.log("i just Click Good");
  }
  kep(){
    console.log("i just Click Good");

  }
  dividend(){
    console.log("i just Click Good");
  }
}
