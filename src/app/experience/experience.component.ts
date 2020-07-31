import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ExperienceService } from '../services/experience.service';
import { ExperienceArticles } from '../interfaces/experience.model';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() titleHeader: string = 'Experience';
  experienceArticles: ExperienceArticles[];
  
  constructor(private navBarVisibilityService: NavBarVisibilityService, 
              private router: Router,
              private experienceService: ExperienceService) { }

  ngOnInit() {
    this.getExperienceArticles();
  }

  getExperienceArticles() {
    this.experienceService.getExperienceArticles().
    subscribe(experienceArticles => this.experienceArticles = experienceArticles)
  }

  goTo() {
    this.router.navigate(['/home'])
  }

}
