import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-akovari-video',
  templateUrl: './akovari-video.component.html',
  styleUrls: ['./akovari-video.component.scss']
})
export class AkovariVideoComponent implements OnInit {
  videoSource = 'assets/images/AkosTestAndTry20170719_164515.mp4';
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  playVideo(event: Event) {
    this.videoplayer.nativeElement.play();
    console.log('playVideoCalled' + event);
  }
}
