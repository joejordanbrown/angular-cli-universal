import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-example-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class ExampleHttpComponent implements OnInit, AfterViewInit {

  api: any;

  constructor(private _http: HttpClient, private _jsonp: Jsonp) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this._jsonp.get('https://widgets.pinterest.com/v3/pidgets/boards/conradopoke/uidesign/pins/?sub=uk&base_scheme=https&callback=JSONP_CALLBACK').subscribe((response: Response) => {
      const data = response.json().data;
      console.log(data);
      this.api = data.pins;
    });
  }
}
