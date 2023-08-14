import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfreximLandingComponent } from './afrexim-landing.component';

describe('AfreximLandingComponent', () => {
  let component: AfreximLandingComponent;
  let fixture: ComponentFixture<AfreximLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfreximLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfreximLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
