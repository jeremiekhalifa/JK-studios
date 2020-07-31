import { Component, OnInit, Input } from '@angular/core';

import { JavascriptService } from '../services/javascript.service';
import { JavascriptArticles } from '../interfaces/javascript.model';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit {
  @Input() titleHeader: string = 'JavaScript';
  @Input() authorHeader: string = 'Jeremie Khalifa';
  @Input() subtitleHeader: string;
  @Input() articleLink: string = '/javascript-details/';
  @Input() presentationHeader: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur';

  javascriptArticles: JavascriptArticles[];

  constructor(private javascriptService: JavascriptService,
    private navBarVisibilityService: NavBarVisibilityService,
    private router: Router) { }

  ngOnInit() {
    this.getJavaScriptArticles();
  }

  getJavaScriptArticles() {
    this.javascriptService.getJavascriptArticles()
      .subscribe(javascriptArticles => this.javascriptArticles = javascriptArticles)
  }

  getValue() {
    console.log('Get value from the parent container.')
  }
}
