import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfreximOverviewComponent } from './afrexim-overview.component';

describe('AfreximOverviewComponent', () => {
  let component: AfreximOverviewComponent;
  let fixture: ComponentFixture<AfreximOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfreximOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfreximOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
