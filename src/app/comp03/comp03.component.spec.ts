import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp03Component } from './comp03.component';

describe('Comp03Component', () => {
  let component: Comp03Component;
  let fixture: ComponentFixture<Comp03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
