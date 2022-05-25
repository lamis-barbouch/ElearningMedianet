import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulttComponent } from './resultt.component';

describe('ResulttComponent', () => {
  let component: ResulttComponent;
  let fixture: ComponentFixture<ResulttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResulttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResulttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
