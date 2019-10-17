import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverKalimantanTimurComponent } from './popover-kalimantan-timur.component';

describe('PopoverKalimantanTimurComponent', () => {
  let component: PopoverKalimantanTimurComponent;
  let fixture: ComponentFixture<PopoverKalimantanTimurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverKalimantanTimurComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverKalimantanTimurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
