import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-akovari-cert',
  templateUrl: './akovari-cert.component.html',
  styleUrls: ['./akovari-cert.component.scss']
})
export class AkovariCertComponent implements OnInit {
  kaSilverWreathImagePath = 'assets/images/KovariAkosEzustkoszoru.png';
  kaJuly102016Igctracklog = 'assets/images/AkosKovari_July102016_403Km_5h33mGlidingFlight.png';
  kankh = 'assets/images/AkosSPL.jpg';
  kaicglog = 'assets/AkosKovari_July102016_2016-07-10-XCS-AAA-02.igc';

  constructor() { }

  ngOnInit() {
  }
}
