import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTabRouteComponent } from './route.component';

describe('ExampleTabRouteComponent', () => {
  let component: ExampleTabRouteComponent;
  let fixture: ComponentFixture<ExampleTabRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTabRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTabRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
