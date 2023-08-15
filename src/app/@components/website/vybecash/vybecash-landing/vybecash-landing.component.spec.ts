import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VybecashLandingComponent } from './vybecash-landing.component';

describe('VybecashLandingComponent', () => {
  let component: VybecashLandingComponent;
  let fixture: ComponentFixture<VybecashLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VybecashLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VybecashLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
