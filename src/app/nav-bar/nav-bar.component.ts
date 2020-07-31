import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import TopNavSections from '../../assets/templates/top-nav-sections.json';
import sideNavSections from '../../assets/templates/side-nav-sections.json';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';
import { TOPNAV } from '../mock-info/nav-bar'
import { SIDENAV } from '../mock-info/nav-bar'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  /* Maybe for the future, to work with JSON files */

  // statusTopNavLink = 0;
  // statusSideNavLink = 0;
  // title = 'top-nav-sections';
  
  // public topNavSectionsList: {
  //   id: string,
  //   fa: string,
  //   name: string
  // }[] = TopNavSections;

  // public sideNavSectionsList: {
  //   id: string,
  //   fa: string,
  //   name: string
  // }[] = sideNavSections;

  topNavLinks = TOPNAV;
  sideNavLinks = SIDENAV;
  sideNavToggle: boolean;

  constructor(
    private router: Router,
    private navBarVisibilityService: NavBarVisibilityService
  ) { }

  ngOnInit() {
  }

  statusSideNav() {
    this.sideNavToggle = !this.sideNavToggle;
    if (this.sideNavToggle) {
      this.navBarVisibilityService.hideOnSideNav = true;
    } else {
      this.navBarVisibilityService.hideOnSideNav = false;
    }
  }

  goTo(url: string) {
    if (this.sideNavToggle) {
      this.sideNavToggle = false;
      this.navBarVisibilityService.hideOnSideNav = false;
    }
    this.router.navigate(['/' + url]);
  } 
}
