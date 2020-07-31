import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AngularArticles } from '../interfaces/angular.model';
import { ANGULARARTICLES } from '../mock-info/angular';

@Injectable({
  providedIn: 'root'
})
export class AngularService {

  constructor() { }

  getAngularArticles(): Observable<AngularArticles[]> {
    return of(ANGULARARTICLES)
  }

  getAngularDetailsArticle(id: number): Observable<AngularArticles> {
    return of(ANGULARARTICLES.find(javascriptArticle => javascriptArticle.id === id));
  }
}
