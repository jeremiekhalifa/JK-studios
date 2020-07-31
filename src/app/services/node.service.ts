import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { NodeArticles } from '../interfaces/node.model';
import { NODEARTICLES } from '../mock-info/node';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor() { }

  getNodeArticles(): Observable<NodeArticles[]> {
    return of(NODEARTICLES)
  }

  getNodeDetailsArticle(id: number): Observable<NodeArticles> {
    return of(NODEARTICLES.find(nodeArticle => nodeArticle.id === id));
  }
}
