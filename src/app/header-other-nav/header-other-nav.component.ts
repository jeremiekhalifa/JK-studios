import { Component, OnInit, Input } from '@angular/core';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-header-other-nav',
  templateUrl: './header-other-nav.component.html',
  styleUrls: ['./header-other-nav.component.scss']
})
export class HeaderOtherNavComponent implements OnInit {
  @Input() titleHeader: string
  constructor(private navBarVisibilityService: NavBarVisibilityService) { }

  ngOnInit() {
  }

}
