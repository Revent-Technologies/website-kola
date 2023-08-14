import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfreximComponent } from './afrexim.component';

describe('AfreximComponent', () => {
  let component: AfreximComponent;
  let fixture: ComponentFixture<AfreximComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfreximComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfreximComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
