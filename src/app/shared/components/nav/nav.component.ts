import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  online$: Observable<boolean>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.online$ = Observable.merge(
        Observable.of(navigator.onLine),
        Observable.fromEvent(window, 'online').mapTo(true),
        Observable.fromEvent(window, 'offline').mapTo(false)
      );
    }
  }

  ngOnInit() {
  }

}
