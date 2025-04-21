import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { email: '', password: '' };

  constructor(private router: Router) {}

  login() {
    const storedUser = localStorage.getItem(this.user.email);
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.password === this.user.password) {
        localStorage.setItem('loggedInUser', JSON.stringify(userData));
        this.router.navigate(['/profile']);
        return;
      }
    }
    alert('Invalid credentials!');
  }
}
