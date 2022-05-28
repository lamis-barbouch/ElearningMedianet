import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterFormateurComponent } from './affecter-formateur.component';

describe('AffecterFormateurComponent', () => {
  let component: AffecterFormateurComponent;
  let fixture: ComponentFixture<AffecterFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecterFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
