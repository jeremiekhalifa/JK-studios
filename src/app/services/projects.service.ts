import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Projects } from '../interfaces/projects.model';
import { PROJECTS } from '../mock-info/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  constructor() { }

  getProjects(): Observable<Projects[]> {
    return of(PROJECTS);
  }

  getProjectDetails(id: number): Observable<Projects> {
    return of(PROJECTS.find(project => project.id === id));
  }
}
