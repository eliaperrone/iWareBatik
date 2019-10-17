import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverBengkaBelitungComponent } from './popover-bengka-belitung.component';

describe('PopoverBengkaBelitungComponent', () => {
  let component: PopoverBengkaBelitungComponent;
  let fixture: ComponentFixture<PopoverBengkaBelitungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverBengkaBelitungComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverBengkaBelitungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
