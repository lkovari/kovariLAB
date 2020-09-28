import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-akovari-main',
  templateUrl: './akovari-main.component.html',
  styleUrls: ['./akovari-main.component.scss']
})
export class AkovariMainComponent implements OnInit {
  kaDiploma = 'assets/images/AkosGraduation2020.jpg';
  kaSilverWreathImagePath = 'assets/images/KovariAkosEzustkoszoru.png';
  kankh = 'assets/images/AkosSPL.jpg';
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  videoSource = 'assets/images/AkosTestAndTry20170719_164515.mp4';

  constructor() { }

  ngOnInit() {
  }

  playVideo(event: Event) {
    this.videoplayer.nativeElement.play();
    console.log('playVideoCalled' + event);
  }
}
