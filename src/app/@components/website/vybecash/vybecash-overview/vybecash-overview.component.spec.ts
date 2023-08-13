import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VybecashOverviewComponent } from './vybecash-overview.component';

describe('VybecashOverviewComponent', () => {
  let component: VybecashOverviewComponent;
  let fixture: ComponentFixture<VybecashOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VybecashOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VybecashOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
