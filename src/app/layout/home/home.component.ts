import { Component, OnInit } from '@angular/core';
import * as angular from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lastUpdateDate = new Date('09/28/2020 11:18 AM');
  constructor() { }

  ngOnInit() {
    console.log('Angular v' + angular.VERSION.full);
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }

}
