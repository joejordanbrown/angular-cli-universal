import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _titleService: Title,
    private _metaService: Meta
  ) {}

  ngOnInit() {
    this._router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this._activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
        this._titleService.setTitle(event['title']);
        this._metaService.addTags([
          { name: 'description', content: event['description'] },
          { name: 'theme-color', content: event['meta']['themeColor'] },
          { name: 'twitter:title', content: event['title'] },
          { name: 'twitter:description', content: event['description'] },
          { name: 'apple-mobile-web-app-capable', content: 'yes' },
          { name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
          { name: 'apple-mobile-web-app-title', content: 'NG Universal' },
          { name: 'apple-touch-startup-image', content: '/assets/images/angular.png' },

          { property: 'og:title', content: event['title'] },
          { property: 'og:description', content: event['description'] },
          { property: 'og:image', content: '/assets/images/angular.png' }
        ]);
      }
    );
  }
}
