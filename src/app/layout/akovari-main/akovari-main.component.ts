import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-akovari-main',
  templateUrl: './akovari-main.component.html',
  styleUrls: ['./akovari-main.component.scss']
})
export class AkovariMainComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;
  pageOwner = 'Ákos Kővári';
  kaDiploma = 'assets/images/AkosGraduation2020.jpg';
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  videoSource = 'assets/images/AkosTestAndTry20170719_164515.mp4';
  private SCREEN_WIDTH_LIMIT = 992;
  mediaObserverAsObservable: Subscription;

  constructor(mediaObserver: MediaObserver) {
    this.mediaObserverAsObservable = mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
      /* option A.
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
      */
      // Option B.
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
    setTimeout(() => {
      this.initializeSideNav();
    });
  }

  onMenuItemClick(event: MouseEvent) {
    this.initializeSideNav();
    console.log('onMenuItemClick ' + event);
  }

  ngOnDestroy(): void {
    this.mediaObserverAsObservable.unsubscribe();
  }
}
