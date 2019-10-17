import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverKalimantanUtaraComponent } from './popover-kalimantan-utara.component';

describe('PopoverKalimantanUtaraComponent', () => {
  let component: PopoverKalimantanUtaraComponent;
  let fixture: ComponentFixture<PopoverKalimantanUtaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverKalimantanUtaraComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverKalimantanUtaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
