import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfreximResultComponent } from './afrexim-result.component';

describe('AfreximResultComponent', () => {
  let component: AfreximResultComponent;
  let fixture: ComponentFixture<AfreximResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfreximResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfreximResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
