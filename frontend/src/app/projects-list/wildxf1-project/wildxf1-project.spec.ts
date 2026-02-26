import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wildxf1Project } from './wildxf1-project';

describe('Wildxf1Project', () => {
  let component: Wildxf1Project;
  let fixture: ComponentFixture<Wildxf1Project>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wildxf1Project]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wildxf1Project);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
