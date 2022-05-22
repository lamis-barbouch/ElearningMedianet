import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionnaireForumComponent } from './dictionnaire-forum.component';

describe('DictionnaireForumComponent', () => {
  let component: DictionnaireForumComponent;
  let fixture: ComponentFixture<DictionnaireForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionnaireForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionnaireForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
