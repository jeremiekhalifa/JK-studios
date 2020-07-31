import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { EducationArticles } from '../interfaces/education.model';
import { EDUCATIONARTICLES } from '../mock-info/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  getEducationArticles(): Observable<EducationArticles[]> {
    return of(EDUCATIONARTICLES)
  }
}
