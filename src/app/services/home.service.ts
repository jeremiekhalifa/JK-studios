import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { RecentArticles, SocialLinks } from '../interfaces/home.model';
import { RECENTARTICLES, SOCIALLINKS } from '../mock-info/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getRecentArticles(): Observable<RecentArticles[]> {
    return of(RECENTARTICLES)
  }
  
  getSocialLinks(): Observable<SocialLinks[]> {
    return of(SOCIALLINKS)
  }
}
