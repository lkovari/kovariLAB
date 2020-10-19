import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  pageOwner = 'Ákos Kővári';
  kaDiploma = 'assets/images/AkosGraduation2020.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
