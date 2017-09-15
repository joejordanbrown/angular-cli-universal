import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-example-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class ExampleHttpComponent implements OnInit, AfterViewInit {

  api: any;

  constructor(private _http: HttpClient) { }

  ngOnInit() { }

  ngAfterViewInit() {

    // url can't be a relative link see issue https://github.com/angular/universal/issues/766
    // const url = 'assets/data/pinterest.json';
    const url = 'https://uixd.co.uk/open-source-software/angular-cli-universal-api/pinterest/pins.json';
    this._http.get(url).subscribe((response: Response) => {
      this.api = response;
    });

    // Doesn't work with server side rendering.
    /*
    const url = 'https://widgets.pinterest.com/v3/pidgets/boards/conradopoke/uidesign/pins/?sub=uk&base_scheme=https';
    this._jsonp.get(url + '&callback=JSONP_CALLBACK').subscribe((response: Response) => {
      const data = response.json().data;
      console.log(data);
      this.api = data.pins;
    });
    */
  }
}
