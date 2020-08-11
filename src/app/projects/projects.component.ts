import { Component, OnInit, Input } from '@angular/core';

import { Projects } from '../interfaces/projects.model';
import { ProjectsService } from '../services/projects.service';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() titleHeader: string = 'Projects';
  @Input() authorHeader: string = 'Jeremie Khalifa';
  @Input() subtitleHeader: string;
  @Input() articleLink: string = '/projects-details/';
  @Input() presentationHeader: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur';

  projectsList: Projects[];

  constructor(private projectsService: ProjectsService, 
              private navBarVisibilityService: NavBarVisibilityService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectsService.getProjects()
    .subscribe(projects => this.projectsList = projects)
  }

}
