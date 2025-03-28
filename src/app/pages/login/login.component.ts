import { Component } from '@angular/core';
import { RedirectCommand, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}

  register() {
    this.router.navigate(['register']);
  }
}
