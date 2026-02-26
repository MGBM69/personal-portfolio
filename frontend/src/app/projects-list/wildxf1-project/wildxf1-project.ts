import { Component, OnInit } from '@angular/core';
import { ProjectContent } from '../../model/project.content';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wildxf1-project',
  imports: [AccordionModule, CommonModule],
  templateUrl: './wildxf1-project.html',
  styleUrl: './wildxf1-project.css',
})
export class Wildxf1Project implements OnInit {
  tabs!: ProjectContent[];
  ngOnInit(): void {
    this.tabs = [
      {
        title: 'Project Overview',
        value: '0',
        content: [
          'Mobile wildlife discovery feature for WildX Safari Assistant app built with Flutter and Spring Boot.',
          'Enables users to search national parks in Sri Lanka by animal species.',
          'Real-time park data with comprehensive details including timing, entry fees, and park regulations.',
          'Integrated with Neon PostgreSQL cloud database for scalable data management.',
          'Production-ready REST API with proper error handling and type-safe models.',
        ],
      },
      {
        title: 'Technologies Used',
        value: '1',
        content: [
          'Flutter (Material Design 3 UI)',
          'Dart - Type-safe model architecture',
          'Spring Boot REST API',
          'PostgreSQL (Neon Cloud Database)',
          'HTTP package for network calls',
          'Custom widget architecture with separation of concerns',
        ],
      },
      {
        title: 'Database Architecture',
        value: '2',
        content: [
          'Three-table relational design: national_parks, park_animal_types, park_rules.',
          'national_parks: Core park info (14 fields including location, fees, timing, contact details).',
          'park_animal_types: Many-to-many relationship linking parks to animal species.',
          'park_rules: One-to-many relationship storing park-specific regulations.',
          'Foreign key constraints with CASCADE DELETE for data integrity.',
          'Indexed queries for fast animal-based park searches.',
        ],
      },

      {
        title: 'Technical Implementation',
        value: '3',
        content: [
          'Clean architecture: Models, Services, Screens, Widgets, Data layers.',
          'NationalPark model with fromJson factory for type-safe API parsing.',
          'NationalParkService handles all backend communication with proper error handling.',
          'Async/await pattern with Future for non-blocking UI operations.',
          'Loading states, error recovery, and empty state handling.',
          'URI encoding for special characters in animal names (e.g., "Sri Lankan Leopard").',
        ],
      },
      {
        title: 'Special Features',
        value: '5',
        content: [
          'Real-time park search by animal species without page reload.',
          'Detailed park information including size in hectares, best visiting season, and contact info.',
          'Dynamic rules and regulations loaded per park from database.',
          'Graceful error handling with user-friendly retry options.',
          'Image loading with fallback UI for network failures.',
          'Material Design 3 with green conservation theme and card-based layouts.',
          'Sliver app bar with parallax image effect on details screen.',
        ],
      },
    ];
  }
}
