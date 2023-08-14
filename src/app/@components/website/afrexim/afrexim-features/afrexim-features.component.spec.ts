import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfreximFeaturesComponent } from './afrexim-features.component';

describe('AfreximFeaturesComponent', () => {
  let component: AfreximFeaturesComponent;
  let fixture: ComponentFixture<AfreximFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfreximFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfreximFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
