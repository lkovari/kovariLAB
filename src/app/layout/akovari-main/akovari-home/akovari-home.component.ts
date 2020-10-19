import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-akovari-home',
  templateUrl: './akovari-home.component.html',
  styleUrls: ['./akovari-home.component.scss']
})
export class AkovariHomeComponent implements OnInit {
  pageOwner = 'Ákos Kővári';
  constructor() { }

  ngOnInit(): void {
  }

}
