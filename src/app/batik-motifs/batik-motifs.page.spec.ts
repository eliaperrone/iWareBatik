import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatikMotifsPage } from './batik-motifs.page';

describe('BatikMotifsPage', () => {
  let component: BatikMotifsPage;
  let fixture: ComponentFixture<BatikMotifsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatikMotifsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatikMotifsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
