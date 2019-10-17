import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverNusaTenggaraBaratComponent } from './popover-nusa-tenggara-barat.component';

describe('PopoverNusaTenggaraBaratComponent', () => {
  let component: PopoverNusaTenggaraBaratComponent;
  let fixture: ComponentFixture<PopoverNusaTenggaraBaratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverNusaTenggaraBaratComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverNusaTenggaraBaratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
