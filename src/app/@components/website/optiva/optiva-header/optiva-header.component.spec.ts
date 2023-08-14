import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptivaHeaderComponent } from './optiva-header.component';

describe('OptivaHeaderComponent', () => {
  let component: OptivaHeaderComponent;
  let fixture: ComponentFixture<OptivaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptivaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptivaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
