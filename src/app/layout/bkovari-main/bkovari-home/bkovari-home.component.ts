import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bkovari-home',
  templateUrl: './bkovari-home.component.html',
  styleUrls: ['./bkovari-home.component.scss']
})
export class BkovariHomeComponent implements OnInit {
  pageOwner = 'Bálint Kővári';
  constructor() { }

  ngOnInit(): void {
  }

}
