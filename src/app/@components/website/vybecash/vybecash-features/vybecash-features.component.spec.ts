import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VybecashFeaturesComponent } from './vybecash-features.component';

describe('VybecashFeaturesComponent', () => {
  let component: VybecashFeaturesComponent;
  let fixture: ComponentFixture<VybecashFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VybecashFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VybecashFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
