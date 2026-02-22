import { Component, OnInit } from '@angular/core';
import { ProjectContent } from '../../model/project.content';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [AccordionModule, CommonModule],
  templateUrl: './portfolio-project.html',
  styleUrl: './portfolio-project.css',
})
export class PortfolioProject implements OnInit {
  tabs!: ProjectContent[];

  ngOnInit(): void {
    this.tabs = [
      {
        title: ' Project Overview',
        value: '0',
        content: [
          'Full-stack personal portfolio built with Angular and Spring Boot.',
          'Showcases projects, skills, and real-time thought sharing.',
          'Integrated PostgreSQL (Neon cloud database).',
          'Deployed with modern production architecture.',
        ],
      },
      {
        title: 'Technologies Used',
        value: '1',
        content: [
          'Angular (Standalone Components)',
          'Spring Boot REST API',
          'Spring WebSocket (STOMP)',
          'PostgreSQL - Neon Cloud',
          'Firebase Authentication',
          'PrimeNG UI Components',
        ],
      },
      {
        title: ' Challenges & Solutions',
        value: '2',
        content: [
          'Implemented real-time updates using WebSocket with STOMP.',
          'Solved Angular + SockJS "global is not defined" issue.',
          'Configured secure CORS for REST and WebSocket.',
          'Designed REST + WebSocket hybrid architecture for performance.',
        ],
      },
      {
        title: 'Special Features',
        value: '3',
        content: [
          'Real-time thought wall without page refresh.',
          'Firebase authentication to download CV securely.',
          'Cloud-hosted PostgreSQL database.',
          'Responsive modern UI with PrimeNG.',
        ],
      },
    ];
  }
}
