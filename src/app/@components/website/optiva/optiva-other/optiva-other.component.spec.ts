import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptivaOtherComponent } from './optiva-other.component';

describe('OptivaOtherComponent', () => {
  let component: OptivaOtherComponent;
  let fixture: ComponentFixture<OptivaOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptivaOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptivaOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
