import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfreximTimelineComponent } from './afrexim-timeline.component';

describe('AfreximTimelineComponent', () => {
  let component: AfreximTimelineComponent;
  let fixture: ComponentFixture<AfreximTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfreximTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfreximTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
