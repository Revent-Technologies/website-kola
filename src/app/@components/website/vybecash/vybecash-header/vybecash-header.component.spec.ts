import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VybecashHeaderComponent } from './vybecash-header.component';

describe('VybecashHeaderComponent', () => {
  let component: VybecashHeaderComponent;
  let fixture: ComponentFixture<VybecashHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VybecashHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VybecashHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
