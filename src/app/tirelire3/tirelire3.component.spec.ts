import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tirelire3Component } from './tirelire3.component';

describe('Tirelire3Component', () => {
  let component: Tirelire3Component;
  let fixture: ComponentFixture<Tirelire3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tirelire3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tirelire3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
