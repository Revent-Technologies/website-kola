import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VybecashComponent } from './vybecash.component';

describe('VybecashComponent', () => {
  let component: VybecashComponent;
  let fixture: ComponentFixture<VybecashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VybecashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VybecashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
