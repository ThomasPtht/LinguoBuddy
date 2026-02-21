import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { VocabularyEntryForm } from './vocabulary-entry-form/vocabulary-entry-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, VocabularyEntryForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('linguobuddy');

}
