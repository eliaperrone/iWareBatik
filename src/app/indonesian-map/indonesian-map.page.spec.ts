import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IndonesianMapPage } from './indonesian-map.page';

describe('IndonesianMapPage', () => {
  let component: IndonesianMapPage;
  let fixture: ComponentFixture<IndonesianMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndonesianMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndonesianMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
