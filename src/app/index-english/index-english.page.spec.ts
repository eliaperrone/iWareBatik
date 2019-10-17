import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEnglishPage } from './index-english.page';

describe('IndexEnglishPage', () => {
  let component: IndexEnglishPage;
  let fixture: ComponentFixture<IndexEnglishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexEnglishPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexEnglishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
