import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tirelire1Component } from './tirelire1.component';

describe('Tirelire1Component', () => {
  let component: Tirelire1Component;
  let fixture: ComponentFixture<Tirelire1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tirelire1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tirelire1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
