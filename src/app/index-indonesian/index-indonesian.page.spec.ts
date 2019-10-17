import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexIndonesianPage } from './index-indonesian.page';

describe('IndexIndonesianPage', () => {
  let component: IndexIndonesianPage;
  let fixture: ComponentFixture<IndexIndonesianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexIndonesianPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexIndonesianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
