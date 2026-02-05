import { inject, Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  User,
} from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IUser } from '../model/iuser.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #auth = inject(Auth);
  #snackbar = inject(MatSnackBar);

  get user(): Observable<User | null> {
    return authState(this.#auth);
  }

  async createUserWithEmailAndPassword(iUser: IUser): Promise<boolean> {
    try {
      const registeredUser = await createUserWithEmailAndPassword(
        this.#auth,
        iUser.email,
        iUser.password,
      );
      await this.sendUserToBackend(registeredUser.user);
      return true;
    } catch (error) {
      this.#showMessage('Error creating user' + error);
      throw new Error('Error creating user:' + error);
      return false;
    }
  }

  #showMessage(message: string): void {
    this.#snackbar.open(message, 'close', {
      duration: 3000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }

  private async sendUserToBackend(user: User): Promise<void> {
    await fetch('http://localhost:8080/api/person/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firebaseuid: user.uid,
        email: user.email,
      }),
    });
  }
}
