import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatikAroundYouPage } from './batik-around-you.page';

describe('BatikAroundYouPage', () => {
  let component: BatikAroundYouPage;
  let fixture: ComponentFixture<BatikAroundYouPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatikAroundYouPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatikAroundYouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
