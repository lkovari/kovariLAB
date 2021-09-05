import { Component, OnInit } from '@angular/core';
import { ExamResult } from './exam-result.enum';

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
  ntaExams = [
    { date: new Date('04/20/2021'), code: '031', name: 'Mass & Balance', occurrence: 1, percent: 92, result: ExamResult.PASSED },
    { date: new Date('04/20/2021'), code: '032', name: 'Performance (Aeroplane)', occurrence: 1, percent: 83, result: ExamResult.PASSED },
    { date: new Date('04/20/2021'), code: '081', name: 'Principles of Flight (Aeroplane)', occurrence: 1, percent: 90, result: ExamResult.PASSED },
    { date: new Date('10/05/2021'), code: '', name: '', occurrence: 0, percent: 0, result: null },
    { date: new Date('10/05/2021'), code: '', name: '', occurrence: 0, percent: 0, result: null },
    { date: new Date('10/05/2021'), code: '', name: '', occurrence: 0, percent: 0, result: null },
    { date: new Date('10/05/2021'), code: '', name: '', occurrence: 0, percent: 0, result: null }
  ];

  constructor() { }

  ngOnInit() {
  }
}
