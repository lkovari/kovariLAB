import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-akovari-cert',
  templateUrl: './akovari-cert.component.html',
  styleUrls: ['./akovari-cert.component.scss']
})
export class AkovariCertComponent implements OnInit {
  kaSilverWreathImagePath = 'assets/images/KovariAkosEzustkoszoru.png';
  kankh = 'assets/images/AkosSPL.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
