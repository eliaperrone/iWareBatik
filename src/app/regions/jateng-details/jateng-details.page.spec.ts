import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JatengDetailsPage } from './jateng-details.page';

describe('JatengDetailsPage', () => {
  let component: JatengDetailsPage;
  let fixture: ComponentFixture<JatengDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JatengDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JatengDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
