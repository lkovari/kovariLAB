import { Component, OnInit } from '@angular/core';
import * as angular from '@angular/forms';

@Component({
  selector: 'app-lkovari-main',
  templateUrl: './lkovari-main.component.html',
  styleUrls: ['./lkovari-main.component.scss']
})
export class LkovariMainComponent implements OnInit {
  angularVersion: string;
  constructor() { }

  ngOnInit() {
    this.angularVersion = angular.VERSION.full;
  }

}
