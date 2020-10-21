import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-akovari-main',
  templateUrl: './akovari-main.component.html',
  styleUrls: ['./akovari-main.component.scss']
})
export class AkovariMainComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  pageOwner = 'Ákos Kővári';
  kaDiploma = 'assets/images/AkosGraduation2020.jpg';
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  videoSource = 'assets/images/AkosTestAndTry20170719_164515.mp4';
  showMenuIcon = false;
  private SCREEN_WIDTH_LIMIT = 992;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      if (event.target.innerWidth < this.SCREEN_WIDTH_LIMIT) {
        this.sidenav.close();
        this.showMenuIcon = true;
      } else {
        this.sidenav.open();
        this.showMenuIcon = false;
      }
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (window.innerWidth < this.SCREEN_WIDTH_LIMIT) {
      this.sidenav.close();
      this.showMenuIcon = true;
    } else {
      this.sidenav.open();
      this.showMenuIcon = false;
    }
  }
}
