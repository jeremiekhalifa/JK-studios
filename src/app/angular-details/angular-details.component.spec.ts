import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDetailsComponent } from './angular-details.component';

describe('AngularDetailsComponent', () => {
  let component: AngularDetailsComponent;
  let fixture: ComponentFixture<AngularDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
