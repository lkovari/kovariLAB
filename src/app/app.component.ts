
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'KovariLAB';
  lastUpdate = new Date('10/19/2020 10:00 PM');

  /*
  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    console.log('Right click functionality blocked.');
    event.preventDefault();
  }
  */
  ngOnInit() {
    console.log('Last update ' + this.lastUpdate.toString());
  }

}
