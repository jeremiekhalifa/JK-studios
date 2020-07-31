import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Projects } from '../interfaces/projects.model';
import { ProjectsService }  from '../services/projects.service';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent implements OnInit {
  projectDetails: Projects;

  constructor(private route: ActivatedRoute, 
    private projectsService: ProjectsService,
    private location: Location,
    private navBarVisibilityService: NavBarVisibilityService) { }

  ngOnInit() {
    this.getProjectDetails();
  }

  getProjectDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectsService.getProjectDetails(id)
      .subscribe(project => this.projectDetails = project);
  }

  goBack(): void {
    this.location.back();
  }

}
