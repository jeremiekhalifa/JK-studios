import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';
import { RecentArticles, SocialLinks } from '../interfaces/home.model';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showReadMore: boolean;
  recentArticles: RecentArticles[];
  socialLinks: SocialLinks[];

  constructor(private router: Router,
    private navBarVisibilityService: NavBarVisibilityService, private homeService: HomeService) { }

  ngOnInit() {
    this.getRecentArticles();
    this.getSocialLinks();
  }

  goTo() {
    this.router.navigate(['/home']);
  }

  getRecentArticles() {
    this.homeService.getRecentArticles()
      .subscribe(recentArticles => this.recentArticles = recentArticles);
  }

  getSocialLinks() {
    this.homeService.getSocialLinks()
    .subscribe(socialLinks => this.socialLinks = socialLinks)
  }

  statusReadMore() {
    this.showReadMore = !this.showReadMore
  }

}
