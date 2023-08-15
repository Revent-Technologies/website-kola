import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSectionComponent } from './other-section.component';

describe('OtherSectionComponent', () => {
  let component: OtherSectionComponent;
  let fixture: ComponentFixture<OtherSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
