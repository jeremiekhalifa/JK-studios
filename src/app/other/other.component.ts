import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  @Input() titleHeader: string = 'Other'
  constructor(private navBarVisibilityService: NavBarVisibilityService, private router: Router) { }

  ngOnInit() {
  }

  goTo() {
    this.router.navigate(['/home'])
  }

}
