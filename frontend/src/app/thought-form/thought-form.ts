import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThoughtService } from '../Services/thought-service';
import { Thought } from '../model/thought';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-thought-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './thought-form.html',
  styleUrl: './thought-form.css',
})
export class ThoughtForm {
  thoughtForm: FormGroup;
  submitting = false;

  @Output() thoughtSubmitted = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private thoughtService: ThoughtService,
  ) {
    this.thoughtForm = this.fb.group({
      name: ['', Validators.required],
      position: [''],
      message: ['', [Validators.required, Validators.maxLength(1000)]],
    });
  }

  submitThought(): void {
    if (this.thoughtForm.invalid) {
      return;
    }

    this.submitting = true;
    const thought: Thought = this.thoughtForm.value;

    this.thoughtService.submitThought(thought).subscribe({
      next: () => {
        this.thoughtForm.reset();
        this.submitting = false;
        this.thoughtSubmitted.emit();
      },
      error: () => {
        this.submitting = false;
      },
    });
  }
}
