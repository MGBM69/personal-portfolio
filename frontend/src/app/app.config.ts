import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'auth-portfolio-ecce5',
        appId: '1:221154173251:web:55a84e437e70b03231cff6',
        storageBucket: 'auth-portfolio-ecce5.firebasestorage.app',
        apiKey: 'AIzaSyAO6V7mMuePyLj52GGLJVcssSfCBbtLAC0',
        authDomain: 'auth-portfolio-ecce5.firebaseapp.com',
        messagingSenderId: '221154173251',
        measurementId: 'G-1HX36FZGCW',
      }),
    ),
    provideAuth(() => getAuth()),
  ],
};
