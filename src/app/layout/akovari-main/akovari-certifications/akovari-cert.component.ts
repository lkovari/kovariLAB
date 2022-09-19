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
  atplacert = ''
  kankh = 'assets/images/AkosSPL.jpg';
  kaicglog = 'assets/AkosKovari_July102016_2016-07-10-XCS-AAA-02.igc';
  ntaExams = [
    { date: new Date('04/20/2021'), code: '031', name: 'Mass & Balance', occurrence: 1, percent: 92, result: ExamResult.PASSED },
    { date: new Date('04/20/2021'), code: '032', name: 'Performance (Aeroplane)', occurrence: 1, percent: 83, result: ExamResult.PASSED },
    { date: new Date('04/20/2021'), code: '081', name: 'Principles of Flight (Aeroplane)', occurrence: 1, percent: 90, result: ExamResult.PASSED },
    { date: new Date('10/05/2021'), code: '040', name: 'Human Performance', occurrence: 1, percent: 87, result: ExamResult.PASSED },
    { date: new Date('10/05/2021'), code: '050', name: 'Meteorology', occurrence: 1, percent: 94, result: ExamResult.PASSED },
    { date: new Date('10/05/2021'), code: '091', name: 'VFR Communication', occurrence: 1, percent: 91, result: ExamResult.PASSED },
    { date: new Date('10/05/2021'), code: '092', name: 'IFR Communication', occurrence: 1, percent: 95, result: ExamResult.PASSED },
    { date: new Date('01/25/2022'), code: '061', name: 'General Navigation', occurrence: 1, percent: 89, result: ExamResult.PASSED },
    { date: new Date('01/25/2022'), code: '062', name: 'Radio Navigation', occurrence: 1, percent: 92, result: ExamResult.PASSED },
    { date: new Date('01/25/2022'), code: '070', name: 'Operational Procedures', occurrence: 1, percent: 93, result: ExamResult.PASSED },
    { date: new Date('04/07/2022'), code: '022', name: 'Aircraft General Knowledge - Instrumentation', occurrence: 1, percent: 98, result: ExamResult.PASSED },
    { date: new Date('04/07/2022'), code: '033', name: 'Flight Planning and Monitoring', occurrence: 1, percent: 92, result: ExamResult.PASSED },
    { date: new Date('07/13/2022'), code: '010', name: 'Air Law', occurrence: 1, percent: 90, result: ExamResult.PASSED },
    { date: new Date('07/13/2022'), code: '021', name: 'Aircraft General Knowledge - Airframe / Systems / Power Plant', occurrence: 1, percent: 87, result: ExamResult.PASSED }
  ];
  averagePercent = 0;

  constructor() { }

  ngOnInit() {
    this.ntaExams.sort((exam1, exam2) => {
      return (exam1.date && exam2.date) ? exam2.date.getTime() - exam1.date.getTime() : 0;
    });
    this.averagePercent = this.ntaExams.reduce((sum, item) => sum + item.percent, 0) / this.ntaExams.length / 100;
  }
}
