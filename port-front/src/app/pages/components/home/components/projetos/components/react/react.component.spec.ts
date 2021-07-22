/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReactComponent } from './react.component';

describe('ReactComponent', () => {
  let component: ReactComponent;
  let fixture: ComponentFixture<ReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
