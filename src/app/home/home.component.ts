import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle: string = 'Testing'
  restItemsUrl: string = "http://c27fd52a.ngrok.io/api/Values";
  // restItemsUrl   : string ="https://address-book-demo.herokuapp.com/api/contacts";
  restItems: any;

  constructor() {
  }

  ngOnInit() {
  }
}
