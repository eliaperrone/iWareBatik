import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KalimantanTimurPisahDetailsPage } from './kalimantan-timur-pisah-details.page';

describe('KalimantanTimurPisahDetailsPage', () => {
  let component: KalimantanTimurPisahDetailsPage;
  let fixture: ComponentFixture<KalimantanTimurPisahDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalimantanTimurPisahDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalimantanTimurPisahDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
