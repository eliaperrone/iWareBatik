import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KepriDetailsPage } from './kepri-details.page';

describe('KepriDetailsPage', () => {
  let component: KepriDetailsPage;
  let fixture: ComponentFixture<KepriDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KepriDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KepriDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
