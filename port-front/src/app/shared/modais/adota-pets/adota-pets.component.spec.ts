/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdotaPetsComponent } from './adota-pets.component';

describe('AdotaPetsComponent', () => {
  let component: AdotaPetsComponent;
  let fixture: ComponentFixture<AdotaPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdotaPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdotaPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
