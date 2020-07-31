import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jeremie-khalifa';

  ngOnInit() {

  }

  statusTopNav() {
    document.getElementById('topNavContainer').classList.toggle('top-nav-container-toggled');
  }
}
