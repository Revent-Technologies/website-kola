import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptivaComponent } from './optiva.component';

describe('OptivaComponent', () => {
  let component: OptivaComponent;
  let fixture: ComponentFixture<OptivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
