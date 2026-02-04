import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ResumeFormCom } from '../resume-form-com/resume-form-com';
import { AuthService } from '../Services/auth-service';

@Component({
  selector: 'app-resume',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ResumeFormCom,
  ],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume implements OnInit {
  loginForm!: FormGroup;
  isRegisterFormActive = signal(false);
  registerForm!: FormGroup;
  isLoggingSuccessful = signal(false);

  #formBuilder = inject(FormBuilder);
  #authService = inject(AuthService);

  ngOnInit(): void {
    this.loginForm = this.#formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.registerForm = this.#formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  showRegisterForm(): void {
    this.isRegisterFormActive.set(true);
  }

  showLoginForm(): void {
    this.isRegisterFormActive.set(false);
  }

  async submitRegister(): Promise<void> {
    try {
      const succes = await this.#authService.createUserWithEmailAndPassword(
        this.registerForm.value,
      );
      if (succes) {
        this.isLoggingSuccessful.set(true);
      }
    } catch (error) {}
  }
}
