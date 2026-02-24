import { Component } from '@angular/core';
import { VocabularyEntryForm } from '../vocabulary-entry-form/vocabulary-entry-form';
import { Collection } from '../collection/collection';

@Component({
  selector: 'app-home-page',
  imports: [VocabularyEntryForm, Collection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
