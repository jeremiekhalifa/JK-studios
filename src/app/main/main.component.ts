import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() articleTitle: string;
  @Input() articleInfo: string;
  @Input() articleLink: string;
  @Output() getValue = new EventEmitter()
  constructor(private router: Router) { }

  ngOnInit() {
    this.getValue.emit();
  }
}
