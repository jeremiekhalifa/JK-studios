import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CssArticles } from '../interfaces/css.model';
import { CSSARTICLES } from '../mock-info/css';

@Injectable({
  providedIn: 'root'
})
export class CssService {

  constructor() { }

  getCssArticles(): Observable<CssArticles[]> {
    return of(CSSARTICLES)
  }

  getCssDetailsArticle(id: number): Observable<CssArticles> {
    return of(CSSARTICLES.find(cssArticle => cssArticle.id === id));
  }
}
