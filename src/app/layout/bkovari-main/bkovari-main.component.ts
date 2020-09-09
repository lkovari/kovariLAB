import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bkovari-main',
  templateUrl: './bkovari-main.component.html',
  styleUrls: ['./bkovari-main.component.scss']
})
export class BkovariMainComponent implements OnInit {
  kbDoorCard = 'assets/images/BalintDoorCardSt122.jpg';
  kbDiploma = 'assets/images/BalintGraduation.jpg';
  constructor() { }

  ngOnInit() {
  }

}
