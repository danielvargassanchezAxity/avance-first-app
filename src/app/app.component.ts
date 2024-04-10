import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'boostrap-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = ''
  title = 'my-first-app';
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  setLogin(): void {
    this.authService.setIsAuth(true);
  }

  logout(): void {
    this.authService.setIsAuth(false);
    this.router.navigate(["first-component"]);
  }
}
