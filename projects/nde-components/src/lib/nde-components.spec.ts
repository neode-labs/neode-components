import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdeComponents } from './nde-components';

describe('NdeComponents', () => {
  let component: NdeComponents;
  let fixture: ComponentFixture<NdeComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NdeComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdeComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
