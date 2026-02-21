import { Component, inject, OnDestroy, OnInit } from '@angular/core';
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
export class Home implements OnInit, OnDestroy {
  #socketService = inject(ThoughtSocketService);
  thoughts: Thought[] = [];
  loading = false;

  constructor(private thoughtService: ThoughtService) {}

  ngOnInit(): void {
    this.connectToWebSocket();
    this.loadThoughts();
  }

  ngOnDestroy(): void {
    this.#socketService.disconnect();
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

  connectToWebSocket(): void {
    this.#socketService.connect((newThought: Thought) => {
      // Prevent duplicates if needed
      const exists = this.thoughts.find((t) => t.id === newThought.id);

      if (!exists) {
        this.thoughts.unshift(newThought); // add to top (nice UX)
      }
    });
  }
}
