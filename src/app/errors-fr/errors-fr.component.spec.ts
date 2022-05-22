import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsFrComponent } from './errors-fr.component';

describe('ErrorsFrComponent', () => {
  let component: ErrorsFrComponent;
  let fixture: ComponentFixture<ErrorsFrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsFrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
