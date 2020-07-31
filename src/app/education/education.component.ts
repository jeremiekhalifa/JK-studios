import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import { EducationService } from '../services/education.service';
import { EducationArticles } from '../interfaces/education.model'
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() titleHeader: string = 'Education';
  educationArticles: EducationArticles[];
  constructor(private navBarVisibilityService: NavBarVisibilityService, 
              private router: Router,
              private educationService: EducationService) { }

  ngOnInit() {
    this.getEducationArticles();
  }

  goTo() {
    this.router.navigate(['/home'])
  }

  getEducationArticles() {
    this.educationService.getEducationArticles()
    .subscribe(educationArticles => this.educationArticles = educationArticles)
  }
}
