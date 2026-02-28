import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  username = '';
  password = '';
  role = 'User';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register({ username: this.username, password: this.password, role: this.role })
      .subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => this.errorMessage = 'Registration failed'
      });
  }
}
