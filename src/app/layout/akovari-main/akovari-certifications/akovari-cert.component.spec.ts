import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkovariCertComponent } from './akovari-cert.component';

describe('AkovariCertComponent', () => {
  let component: AkovariCertComponent;
  let fixture: ComponentFixture<AkovariCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkovariCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkovariCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
