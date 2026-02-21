import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { VocabularyEntryForm } from './vocabulary-entry-form/vocabulary-entry-form';
import { Collection } from './collection/collection';
import { LucideAngularModule } from 'lucide-angular';


@Component({
  selector: 'app-root',
  imports: [ LucideAngularModule, Header, VocabularyEntryForm, Collection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lingobuddy');

}
