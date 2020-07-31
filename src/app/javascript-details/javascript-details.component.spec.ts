import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDetailsComponent } from './javascript-details.component';

describe('JavascriptDetailsComponent', () => {
  let component: JavascriptDetailsComponent;
  let fixture: ComponentFixture<JavascriptDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
