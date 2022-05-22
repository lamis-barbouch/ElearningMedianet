import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFormationsComponent } from './details-formations.component';

describe('DetailsFormationsComponent', () => {
  let component: DetailsFormationsComponent;
  let fixture: ComponentFixture<DetailsFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFormationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
