import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-akovari-main',
  templateUrl: './akovari-main.component.html',
  styleUrls: ['./akovari-main.component.scss']
})
export class AkovariMainComponent implements OnInit {
  kaDiploma = 'assets/images/AkosGraduation2020.jpg';
  kaSilverWreathImagePath = 'assets/images/KovariAkosEzustkoszoru.png';

  constructor() { }

  ngOnInit() {
  }

}
