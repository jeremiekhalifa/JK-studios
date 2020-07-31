import { Component, OnInit } from '@angular/core';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private navBarVisibilityService: NavBarVisibilityService) { }

  ngOnInit() {
  }

}
