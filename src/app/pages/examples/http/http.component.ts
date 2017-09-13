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
    this._http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((response: Response) => {
      this.api = response;
    });
  }

}
