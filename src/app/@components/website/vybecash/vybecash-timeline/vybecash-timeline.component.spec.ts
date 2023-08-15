import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VybecashTimelineComponent } from './vybecash-timeline.component';

describe('VybecashTimelineComponent', () => {
  let component: VybecashTimelineComponent;
  let fixture: ComponentFixture<VybecashTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VybecashTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VybecashTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
