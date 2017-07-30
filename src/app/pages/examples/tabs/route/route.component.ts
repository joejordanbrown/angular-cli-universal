import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class ExampleTabRouteComponent implements OnInit {

  id: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.url.subscribe((url) => {
      this.id = url[0].path;
    });
  }

}
