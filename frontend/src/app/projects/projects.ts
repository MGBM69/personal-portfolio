import { Component } from '@angular/core';
import { PortfolioProject } from '../projects-list/portfolio-project/portfolio-project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [PortfolioProject],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {}
