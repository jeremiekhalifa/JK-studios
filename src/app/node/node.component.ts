import { Component, OnInit, Input } from '@angular/core';

import { NodeArticles } from '../interfaces/node.model';
import { NodeService } from '../services/node.service';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() titleHeader: string = 'NodeJS';
  @Input() authorHeader: string = 'Jeremie Khalifa'
  @Input() subtitleHeader: string;
  @Input() presentationHeader: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur';
  @Input() articleLink: string = '/node-details/';
  nodeArticles: NodeArticles[];

  constructor(private navBarVisibilityService: NavBarVisibilityService, private nodeService: NodeService) { }

  ngOnInit() {
    this.getNodeArticles();
  }

  getNodeArticles() {
    this.nodeService.getNodeArticles()
    .subscribe(nodeArticles => this.nodeArticles = nodeArticles)
  }

}
