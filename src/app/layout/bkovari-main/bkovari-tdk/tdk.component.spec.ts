import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TDKComponent } from './tdk.component';

describe('TDKComponent', () => {
  let component: TDKComponent;
  let fixture: ComponentFixture<TDKComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TDKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
