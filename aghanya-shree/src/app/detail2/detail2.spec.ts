import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail2 } from './detail2';

describe('Detail2', () => {
  let component: Detail2;
  let fixture: ComponentFixture<Detail2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detail2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detail2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
