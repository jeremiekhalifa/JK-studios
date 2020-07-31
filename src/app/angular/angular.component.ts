import { Component, OnInit, Input } from '@angular/core';

import { AngularService } from '../services/angular.service';
import { AngularArticles } from '../interfaces/angular.model';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
  @Input() titleHeader: string = 'Angular';
  @Input() authorHeader: string = 'Jeremie Khalifa'
  @Input() subtitleHeader: string;
  @Input() presentationHeader: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur';
  @Input() articleLink: string = '/angular-details/';
  angularArticles: AngularArticles[];

  constructor(private angularService: AngularService, private navBarVisibilityService: NavBarVisibilityService) { }

  ngOnInit() {
    this.getJavaScriptArticles();
  }

  getJavaScriptArticles() {
    this.angularService.getAngularArticles()
    .subscribe(angularArticles => this.angularArticles = angularArticles)
  }

}
