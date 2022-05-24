import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSubjectByLikesComponent } from './msubject-by-likes.component';

describe('MSubjectByLikesComponent', () => {
  let component: MSubjectByLikesComponent;
  let fixture: ComponentFixture<MSubjectByLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSubjectByLikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MSubjectByLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
