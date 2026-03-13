import { Routes } from '@angular/router';
import { Flashcard } from './flashcard/flashcard';
import { HomePage } from './home-page/home-page';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { authGuard } from './auth/auth.guard'; // ← ajoute

export const routes: Routes = [
  // public routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // protected routes, authguard check if user is authenticated before allowing access
  { path: '', component: HomePage, canActivate: [authGuard] },
  { path: 'flashcards', component: Flashcard, canActivate: [authGuard] },

  // Fallback when no prior route is matched
  { path: '**', redirectTo: 'login' },
];