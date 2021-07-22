/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WarzoneComponent } from './warzone.component';

describe('WarzoneComponent', () => {
  let component: WarzoneComponent;
  let fixture: ComponentFixture<WarzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
