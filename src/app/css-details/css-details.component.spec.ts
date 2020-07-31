import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDetailsComponent } from './css-details.component';

describe('CssDetailsComponent', () => {
  let component: CssDetailsComponent;
  let fixture: ComponentFixture<CssDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
