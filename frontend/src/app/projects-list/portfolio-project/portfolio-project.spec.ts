import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProject } from './portfolio-project';

describe('PortfolioProject', () => {
  let component: PortfolioProject;
  let fixture: ComponentFixture<PortfolioProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
