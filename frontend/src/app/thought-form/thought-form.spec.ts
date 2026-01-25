import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtForm } from './thought-form';

describe('ThoughtForm', () => {
  let component: ThoughtForm;
  let fixture: ComponentFixture<ThoughtForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThoughtForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThoughtForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
