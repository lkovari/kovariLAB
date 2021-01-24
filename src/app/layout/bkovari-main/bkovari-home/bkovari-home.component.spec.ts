import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BkovariHomeComponent } from './bkovari-home.component';

describe('BkovariHomeComponent', () => {
  let component: BkovariHomeComponent;
  let fixture: ComponentFixture<BkovariHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BkovariHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkovariHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
