import {Routes} from '@angular/router';
import { flatMap } from 'rxjs';
import { Flashcard } from './flashcard/flashcard';
import { App } from './app';
import { HomePage } from './home-page/home-page';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'flashcards',
    component: Flashcard,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent
  }
];