import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  isIn = false;
  constructor(private authService: AuthService, private router: Router) {}
  async canActivate(): Promise<boolean> {
    this.isIn = await this.authService.isLoggedIn();
    if (!this.isIn) {
      this.authService.isLoggedIn();
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
