import { Component, inject, OnInit } from '@angular/core';
import { Thought } from '../model/thought';
import { ThoughtService } from '../Services/thought-service';
import { ThoughtForm } from '../thought-form/thought-form';
import { CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import { ThoughtSocketService } from '../Services/thought-socket-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ThoughtForm, CommonModule, DatePipe],
  templateUrl: `./home.html`,
  styleUrl: './home.css',
})
export class Home implements OnInit {
  #socketService = inject(ThoughtSocketService);
  thoughts: Thought[] = [];
  loading = false;

  constructor(private thoughtService: ThoughtService) {}
  ngOnInit(): void {
    this.loadThoughts();
  }

  loadThoughts(): void {
    this.loading = true;
    this.thoughtService.getThoughts().subscribe({
      next: (data) => {
        this.thoughts = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
