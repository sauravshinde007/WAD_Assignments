import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private router: Router) {}

  register() {
    localStorage.setItem(this.user.email, JSON.stringify(this.user));
    alert('User registered successfully!');
    this.router.navigate(['/login']);
  }
}
