import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-akovari-main',
  templateUrl: './akovari-main.component.html',
  styleUrls: ['./akovari-main.component.scss']
})
export class AkovariMainComponent implements OnInit {
  pageOwner = 'Ákos Kővári';
  kaDiploma = 'assets/images/AkosGraduation2020.jpg';
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  videoSource = 'assets/images/AkosTestAndTry20170719_164515.mp4';
  isExpanded = true;
  showSubmenu = false;
  isShowing = false;
  showSubSubMenu = false;

  constructor() { }

  ngOnInit() {
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


  playVideo(event: Event) {
    this.videoplayer.nativeElement.play();
    console.log('playVideoCalled' + event);
  }
}
