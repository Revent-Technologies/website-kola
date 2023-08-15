import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptivaFeaturesComponent } from './optiva-features.component';

describe('OptivaFeaturesComponent', () => {
  let component: OptivaFeaturesComponent;
  let fixture: ComponentFixture<OptivaFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptivaFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptivaFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
