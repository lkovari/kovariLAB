import { Component, OnInit, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-bkovari-main',
  templateUrl: './bkovari-main.component.html',
  styleUrls: ['./bkovari-main.component.scss']
})
export class BkovariMainComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  pageOwner = 'Bálint Kővári';
  isExpanded = true;
  isShowing = false;
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

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

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
