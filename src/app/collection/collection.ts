import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { LucideAngularModule, GraduationCap } from 'lucide-angular';

@Component({
  selector: 'app-collection',
  imports: [LucideAngularModule],
  templateUrl: './collection.html',
  styleUrl: './collection.scss',
})
export class Collection {

  constructor(private router: Router) { }

    onFlashcards() {
    this.router.navigateByUrl('flashcards');
  }
}