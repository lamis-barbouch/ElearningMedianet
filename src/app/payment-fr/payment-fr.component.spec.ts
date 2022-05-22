import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFrComponent } from './payment-fr.component';

describe('PaymentFrComponent', () => {
  let component: PaymentFrComponent;
  let fixture: ComponentFixture<PaymentFrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentFrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
