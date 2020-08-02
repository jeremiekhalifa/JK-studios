import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    "(window:click)": "closeFromOutside()"
  }
})
export class AppComponent {
  title = 'jeremie-khalifa';

  ngOnInit() {

  }

  statusTopNav($event) {
    $event.stopPropagation();
    document.getElementById('topNavContainer').classList.toggle('top-nav-container-toggled');
  }

  closeFromOutside() {
    document.getElementById('topNavContainer').classList.remove('top-nav-container-toggled');
  }
}
