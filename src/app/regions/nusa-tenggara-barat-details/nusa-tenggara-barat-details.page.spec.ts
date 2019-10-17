import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NusaTenggaraBaratDetailsPage } from './nusa-tenggara-barat-details.page';

describe('NusaTenggaraBaratDetailsPage', () => {
  let component: NusaTenggaraBaratDetailsPage;
  let fixture: ComponentFixture<NusaTenggaraBaratDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NusaTenggaraBaratDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NusaTenggaraBaratDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
