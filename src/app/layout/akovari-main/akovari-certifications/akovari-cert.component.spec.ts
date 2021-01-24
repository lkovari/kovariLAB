import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AkovariCertComponent } from './akovari-cert.component';

describe('AkovariCertComponent', () => {
  let component: AkovariCertComponent;
  let fixture: ComponentFixture<AkovariCertComponent>;

  beforeEach(waitForAsync(() => {
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
