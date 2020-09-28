
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'KovariLAB';
  lastUpdate = new Date('10/16/2020 08:46 PM');

  ngOnInit() {
    console.log('Last update ' + this.lastUpdate.toString());
  }
}
