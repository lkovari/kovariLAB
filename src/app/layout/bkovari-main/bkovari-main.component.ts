import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bkovari-main',
  templateUrl: './bkovari-main.component.html',
  styleUrls: ['./bkovari-main.component.scss']
})
export class BkovariMainComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;
  pageOwner = 'Bálint Kővári';
  private SCREEN_WIDTH_LIMIT = 992;
  mediaObserverAsObservable: Subscription;

  constructor(mediaObserver: MediaObserver) {
    this.mediaObserverAsObservable = mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
      // option A.
      const currentMediaChange = changes[0];
      if (currentMediaChange.mqAlias === 'sm' || currentMediaChange.mqAlias === 'xs') {
        if (this.sidenav) {
          this.sidenav.close();
        }
      } else {
        if (this.sidenav) {
          this.sidenav.open();
        }
      }

      /* Option B.
      const maxPriority = changes.reduce(
        (currentMax, mediaChange) => (mediaChange.priority > currentMax ? mediaChange.priority : currentMax),
        changes[0].priority
      );
      const currentMediaChange = changes.find(mc => mc.priority === maxPriority);
      if (currentMediaChange) {
        if (currentMediaChange.mqAlias === 'sm' || currentMediaChange.mqAlias === 'xs') {
          if (this.sidenav) {
            this.sidenav.close();
          }
        } else {
          if (this.sidenav) {
            this.sidenav.open();
          }
        }
      }
      */
    });
  }

  private initializeSideNav() {
    if (window.innerWidth < this.SCREEN_WIDTH_LIMIT) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.initializeSideNav();
  }

  onMenuItemClick(event: MouseEvent) {
    this.initializeSideNav();
    console.log('onMenuItemClick ' + event);
  }

  ngOnDestroy(): void {
    this.mediaObserverAsObservable.unsubscribe();
  }
}
