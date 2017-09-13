import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDragScrollComponent } from './drag-scroll.component';

describe('ExampleDragScrollComponent', () => {
  let component: ExampleDragScrollComponent;
  let fixture: ComponentFixture<ExampleDragScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDragScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDragScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
