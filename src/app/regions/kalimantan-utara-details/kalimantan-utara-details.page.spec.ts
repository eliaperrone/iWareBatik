import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KalimantanUtaraDetailsPage } from './kalimantan-utara-details.page';

describe('KalimantanUtaraDetailsPage', () => {
  let component: KalimantanUtaraDetailsPage;
  let fixture: ComponentFixture<KalimantanUtaraDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalimantanUtaraDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalimantanUtaraDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
