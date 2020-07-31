import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NodeArticles } from '../interfaces/node.model';
import { NodeService } from '../services/node.service';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.scss']
})
export class NodeDetailsComponent implements OnInit {
  nodeDetailsArticle: NodeArticles;

  constructor(private route: ActivatedRoute, 
    private nodeService: NodeService,
    private location: Location,
    private navBarVisibilityService: NavBarVisibilityService) { }

  ngOnInit() {
    this.getNodeDetailseArticle()
  }

  getNodeDetailseArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.nodeService.getNodeDetailsArticle(id)
      .subscribe(nodeDetailsArticle => this.nodeDetailsArticle = nodeDetailsArticle);
  }

  goBack(): void {
    this.location.back();
  }

}
