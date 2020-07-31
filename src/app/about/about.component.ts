import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() titleHeader: string = 'About'

  constructor(private navBarVisibilityService: NavBarVisibilityService, private router: Router) { }

  ngOnInit() {
  }

  goTo() {
    this.router.navigate(['/home'])
  }

}
