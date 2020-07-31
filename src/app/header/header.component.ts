import { Component, OnInit, Input } from '@angular/core';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() titleHeader: string;
  @Input() authorText: string;
  @Input() authorName: string;
  @Input() subtitleHeader: string;
  @Input() presentationHeader: string;

  constructor(private navBarVisibilityService: NavBarVisibilityService) { }

  ngOnInit() {
  }

}
