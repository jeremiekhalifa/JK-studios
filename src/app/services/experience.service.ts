import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ExperienceArticles } from '../interfaces/experience.model';
import { EXPERIENCEARTICLES } from '../mock-info/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getExperienceArticles(): Observable<ExperienceArticles[]> {
    return of(EXPERIENCEARTICLES)
  }
}
