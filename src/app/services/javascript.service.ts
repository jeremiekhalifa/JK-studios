import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { JavascriptArticles } from '../interfaces/javascript.model';
import { JAVASCRIPTARTICLES } from '../mock-info/javascript';

@Injectable({
  providedIn: 'root'
})
export class JavascriptService {

  constructor() { }
  
  getJavascriptArticles(): Observable<JavascriptArticles[]> {
    return of(JAVASCRIPTARTICLES)
  }

  getJavaScriptDetailsArticle(id: number): Observable<JavascriptArticles> {
    return of(JAVASCRIPTARTICLES.find(javascriptArticle => javascriptArticle.id === id));
  }

}
