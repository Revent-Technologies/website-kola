import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptivaLandingComponent } from './optiva-landing.component';

describe('OptivaLandingComponent', () => {
  let component: OptivaLandingComponent;
  let fixture: ComponentFixture<OptivaLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptivaLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptivaLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
