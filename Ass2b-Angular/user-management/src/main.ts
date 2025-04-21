import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { RegisterComponent } from './app/register/register.component';
import { LoginComponent } from './app/login/login.component';
import { ProfileComponent } from './app/profile/profile.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: 'register', pathMatch: 'full' }
    ]),
    provideHttpClient()
  ]
});
