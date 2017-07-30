import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNavComponent } from './nav.component';

describe('ExampleNavComponent', () => {
  let component: ExampleNavComponent;
  let fixture: ComponentFixture<ExampleNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
