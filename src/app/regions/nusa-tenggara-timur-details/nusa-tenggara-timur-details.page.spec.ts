import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NusaTenggaraTimurDetailsPage } from './nusa-tenggara-timur-details.page';

describe('NusaTenggaraTimurDetailsPage', () => {
  let component: NusaTenggaraTimurDetailsPage;
  let fixture: ComponentFixture<NusaTenggaraTimurDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NusaTenggaraTimurDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NusaTenggaraTimurDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
