import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePerformanceComponent } from './home-performance.component';

describe('HomePerformanceComponent', () => {
  let component: HomePerformanceComponent;
  let fixture: ComponentFixture<HomePerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
