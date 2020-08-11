import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { AngularComponent } from './angular/angular.component';
import { ContactComponent } from './contact/contact.component';
import { CssComponent } from './css/css.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { NodeComponent } from './node/node.component';
import { OtherComponent } from './other/other.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactSuccessfulComponent } from './contact-successful/contact-successful.component';
import { TestComponent } from './test/test.component'

// Details Components
import { ProjectsDetailsComponent } from './projects-details/projects-details.component'
import { JavascriptDetailsComponent } from './javascript-details/javascript-details.component';
import { AngularDetailsComponent } from './angular-details/angular-details.component';
import { CssDetailsComponent } from './css-details/css-details.component';
import { NodeDetailsComponent } from './node-details/node-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'top-nav', component: NavBarComponent },
  { path: 'about', component: AboutComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'css', component: CssComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'node', component: NodeComponent },
  { path: 'other', component: OtherComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact-successful', component: ContactSuccessfulComponent },
  { path: 'test', component: TestComponent },

  // Details Components
  { path: 'projects-details/:id', component: ProjectsDetailsComponent },
  { path: 'javascript-details/:id', component: JavascriptDetailsComponent },
  { path: 'angular-details/:id', component: AngularDetailsComponent },
  { path: 'css-details/:id', component: CssDetailsComponent },
  { path: 'node-details/:id', component: NodeDetailsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
