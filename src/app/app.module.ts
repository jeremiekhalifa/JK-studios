import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { CssComponent } from './css/css.component';
import { NodeComponent } from './node/node.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { OtherComponent } from './other/other.component';
import { HeaderComponent } from './header/header.component';
import { LoadersComponent } from './loaders/loaders.component';
import { Loader1Component } from './loaders/loader1/loader1.component';
import { FormTemplateDataService } from './services/form-template-data.service';
import { MainComponent } from './main/main.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { FooterComponent } from './footer/footer.component';
import { JavascriptDetailsComponent } from './javascript-details/javascript-details.component';
import { AngularDetailsComponent } from './angular-details/angular-details.component';
import { CssDetailsComponent } from './css-details/css-details.component';
import { HeaderOtherNavComponent } from './header-other-nav/header-other-nav.component';
import { ContactSuccessfulComponent } from './contact-successful/contact-successful.component';
import { NodeDetailsComponent } from './node-details/node-details.component';
import { ScrollprogressDirective } from './directives/scrollprogress.directive';
import { TestComponent } from './test/test.component'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    JavascriptComponent,
    AngularComponent,
    CssComponent,
    NodeComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    OtherComponent,
    HeaderComponent,
    LoadersComponent,
    Loader1Component,
    MainComponent,
    ProjectsDetailsComponent,
    FooterComponent,
    JavascriptDetailsComponent,
    AngularDetailsComponent,
    CssDetailsComponent,
    HeaderOtherNavComponent,
    ContactSuccessfulComponent,
    NodeDetailsComponent,
    ScrollprogressDirective,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [FormTemplateDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
