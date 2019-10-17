import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KalselDetailsPage } from './kalsel-details.page';

describe('KalselDetailsPage', () => {
  let component: KalselDetailsPage;
  let fixture: ComponentFixture<KalselDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalselDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalselDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
