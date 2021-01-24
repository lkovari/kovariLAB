import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AkovariHomeComponent } from './akovari-home.component';

describe('AkovariHomeComponent', () => {
  let component: AkovariHomeComponent;
  let fixture: ComponentFixture<AkovariHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AkovariHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkovariHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
