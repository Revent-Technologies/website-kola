import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptivaOverviewComponent } from './optiva-overview.component';

describe('OptivaOverviewComponent', () => {
  let component: OptivaOverviewComponent;
  let fixture: ComponentFixture<OptivaOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptivaOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptivaOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
