import { ComponentFixture, TestBed } from '@angular/core/testing';

import { K194060852Component } from './k194060852.component';

describe('K194060852Component', () => {
  let component: K194060852Component;
  let fixture: ComponentFixture<K194060852Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ K194060852Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(K194060852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
