import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfreximHeaderComponent } from './afrexim-header.component';

describe('AfreximHeaderComponent', () => {
  let component: AfreximHeaderComponent;
  let fixture: ComponentFixture<AfreximHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfreximHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfreximHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
