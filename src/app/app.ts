import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { VocabularyEntryForm } from './vocabulary-entry-form/vocabulary-entry-form';
import { Collection } from './collection/collection';
import { LucideAngularModule } from 'lucide-angular';
import { Flashcard } from './flashcard/flashcard';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LucideAngularModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lingobuddy');

}
