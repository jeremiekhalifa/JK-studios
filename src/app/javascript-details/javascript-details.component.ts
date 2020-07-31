import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { JavascriptArticles } from '../interfaces/javascript.model';
import { JavascriptService } from '../services/javascript.service';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-javascript-details',
  templateUrl: './javascript-details.component.html',
  styleUrls: ['./javascript-details.component.scss']
})
export class JavascriptDetailsComponent implements OnInit {
  javascriptDetailsArticle: JavascriptArticles;

  constructor(private route: ActivatedRoute, 
    private javascriptService: JavascriptService,
    private location: Location,
    private navBarVisibilityService: NavBarVisibilityService) { }

  ngOnInit() {
    this.getJavascriptDetailsArticle();
  }

  getJavascriptDetailsArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.javascriptService.getJavaScriptDetailsArticle(id)
      .subscribe(javascriptDetailsArticle => this.javascriptDetailsArticle = javascriptDetailsArticle);
  }

  goBack(): void {
    this.location.back();
  }

}
