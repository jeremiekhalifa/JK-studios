import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSuccessfulComponent } from './contact-successful.component';

describe('ContactSuccessfulComponent', () => {
  let component: ContactSuccessfulComponent;
  let fixture: ComponentFixture<ContactSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
