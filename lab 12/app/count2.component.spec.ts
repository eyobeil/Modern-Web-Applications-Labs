import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Count2Component } from './count2.component';

describe('Count2Component', () => {
  let component: Count2Component;
  let fixture: ComponentFixture<Count2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Count2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Count2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
