import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() titleHeader: string = 'Contact';
  contactForm: FormGroup;
  submitted: boolean = false;
  loginFail: boolean = false;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private navBarVisibilityService: NavBarVisibilityService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      message: ['']
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  async onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    } 
    console.log('successful contact.')
    this.router.navigate(['/contact-successful'])
  }

}
