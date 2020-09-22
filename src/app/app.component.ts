
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'KovariLAB';
  lastUpdate = new Date('09/22/2020 05:47 PM');

  ngOnInit() {
    console.log('Last update ' + this.lastUpdate.toString());
  }
}
