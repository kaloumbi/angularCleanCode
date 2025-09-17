import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTache } from './new-tache';

describe('NewTache', () => {
  let component: NewTache;
  let fixture: ComponentFixture<NewTache>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTache]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTache);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
