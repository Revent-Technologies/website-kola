import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptivaResearchComponent } from './optiva-research.component';

describe('OptivaResearchComponent', () => {
  let component: OptivaResearchComponent;
  let fixture: ComponentFixture<OptivaResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptivaResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptivaResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
