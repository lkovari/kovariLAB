import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkovariVideoComponent } from './akovari-video.component';

describe('AkovariVideoComponent', () => {
  let component: AkovariVideoComponent;
  let fixture: ComponentFixture<AkovariVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkovariVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkovariVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
