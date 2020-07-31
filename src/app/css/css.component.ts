import { Component, OnInit, Input } from '@angular/core';

import { CssArticles } from '../interfaces/css.model';
import { CssService } from '../services/css.service';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit {
  @Input() titleHeader: string = 'CSS';
  @Input() authorHeader: string = 'Jeremie Khalifa'
  @Input() subtitleHeader: string;
  @Input() presentationHeader: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur';
  @Input() articleLink: string = '/css-details/';
  cssArticles: CssArticles[];

  constructor(private cssService: CssService, private navBarVisibilityService: NavBarVisibilityService) { }

  ngOnInit() {
    this.getCssArticles();
  }

  getCssArticles() {
    this.cssService.getCssArticles()
    .subscribe(cssArticles => this.cssArticles = cssArticles)
  }

}
