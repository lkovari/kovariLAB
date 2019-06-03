
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'KovariLAB';
  lastUpdate = new Date('06/02/2019 07:42 PM');

  ngOnInit() {
    console.log('Last update ' + this.lastUpdate.toDateString());
  }
}
