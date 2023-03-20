import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tirelire2Component } from './tirelire2.component';

describe('Tirelire2Component', () => {
  let component: Tirelire2Component;
  let fixture: ComponentFixture<Tirelire2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tirelire2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tirelire2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
