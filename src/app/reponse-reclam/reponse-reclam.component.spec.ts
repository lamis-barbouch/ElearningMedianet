import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseReclamComponent } from './reponse-reclam.component';

describe('ReponseReclamComponent', () => {
  let component: ReponseReclamComponent;
  let fixture: ComponentFixture<ReponseReclamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponseReclamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponseReclamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
