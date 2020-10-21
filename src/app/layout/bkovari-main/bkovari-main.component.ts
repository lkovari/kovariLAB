import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-bkovari-main',
  templateUrl: './bkovari-main.component.html',
  styleUrls: ['./bkovari-main.component.scss']
})
export class BkovariMainComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  pageOwner = 'Bálint Kővári';
  private SCREEN_WIDTH_LIMIT = 992;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      if (event.target.innerWidth < this.SCREEN_WIDTH_LIMIT) {
        this.sidenav.close();
      } else {
        this.sidenav.open();
      }
  }

  constructor() { }

  ngOnInit() {
  }


  onMenuItemClick(event: MouseEvent) {
    if (window.innerWidth < this.SCREEN_WIDTH_LIMIT) {
      this.sidenav.close();
    }
    console.log('onMenuItemClick ' + event);
  }
}
