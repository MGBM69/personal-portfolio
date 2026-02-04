import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFormCom } from './resume-form-com';

describe('ResumeFormCom', () => {
  let component: ResumeFormCom;
  let fixture: ComponentFixture<ResumeFormCom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeFormCom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeFormCom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
