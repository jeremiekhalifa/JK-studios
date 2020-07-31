import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AngularArticles } from '../interfaces/angular.model';
import { AngularService } from '../services/angular.service';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-angular-details',
  templateUrl: './angular-details.component.html',
  styleUrls: ['./angular-details.component.scss']
})
export class AngularDetailsComponent implements OnInit {
  angularDetailsArticle: AngularArticles;

  constructor(private route: ActivatedRoute, 
    private angularService: AngularService,
    private location: Location,
    private navBarVisibilityService: NavBarVisibilityService) { }

  ngOnInit() {
    this.getAngularDetailseArticle()
  }

  getAngularDetailseArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.angularService.getAngularDetailsArticle(id)
      .subscribe(angularDetailsArticle => this.angularDetailsArticle = angularDetailsArticle);
  }

  goBack(): void {
    this.location.back();
  }

}
