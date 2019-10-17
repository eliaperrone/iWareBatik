import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverNusaTenggaraTimurComponent } from './popover-nusa-tenggara-timur.component';

describe('PopoverNusaTenggaraTimurComponent', () => {
  let component: PopoverNusaTenggaraTimurComponent;
  let fixture: ComponentFixture<PopoverNusaTenggaraTimurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverNusaTenggaraTimurComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverNusaTenggaraTimurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
