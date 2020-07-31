import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-contact-successful',
  templateUrl: './contact-successful.component.html',
  styleUrls: ['./contact-successful.component.scss']
})
export class ContactSuccessfulComponent implements OnInit {
  @Input() titleHeader: string = 'Contact Successful'
  
  constructor(private router: Router, private navBarVisibilityService: NavBarVisibilityService) { }

  ngOnInit() {
  }

  goTo() {
    this.router.navigate(['/home'])
  }

}
