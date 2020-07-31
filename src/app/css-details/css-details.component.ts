import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CssArticles } from '../interfaces/css.model';
import { CssService } from '../services/css.service';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-css-details',
  templateUrl: './css-details.component.html',
  styleUrls: ['./css-details.component.scss']
})
export class CssDetailsComponent implements OnInit {
  cssDetailsArticle: CssArticles;
  
  constructor(private route: ActivatedRoute, 
    private cssService: CssService,
    private location: Location,
    private navBarVisibilityService: NavBarVisibilityService) { }

  ngOnInit() {
    this.getCssDetailseArticle()
  }

  getCssDetailseArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cssService.getCssDetailsArticle(id)
      .subscribe(cssDetailsArticle => this.cssDetailsArticle = cssDetailsArticle);
  }

  goBack(): void {
    this.location.back();
  }

}
