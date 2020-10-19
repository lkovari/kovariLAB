import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-bkovari-main',
  templateUrl: './bkovari-main.component.html',
  styleUrls: ['./bkovari-main.component.scss']
})
export class BkovariMainComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  pageOwner = 'Bálint Kővári';
  isExpanded = true;
  showSubmenu = false;
  isShowing = false;
  showSubSubMenu = false;

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
}
