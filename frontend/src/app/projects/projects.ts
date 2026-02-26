import { Component } from '@angular/core';
import { PortfolioProject } from '../projects-list/portfolio-project/portfolio-project';
import { Wildxf1Project } from '../projects-list/wildxf1-project/wildxf1-project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [PortfolioProject, Wildxf1Project],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {}
