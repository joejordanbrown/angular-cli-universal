import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleExampleTabsComponent } from './tabs.component';

describe('ExampleExampleTabsComponent', () => {
  let component: ExampleTabsComponent;
  let fixture: ComponentFixture<ExampleTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
