import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOtherNavComponent } from './header-other-nav.component';

describe('HeaderOtherNavComponent', () => {
  let component: HeaderOtherNavComponent;
  let fixture: ComponentFixture<HeaderOtherNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderOtherNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOtherNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
