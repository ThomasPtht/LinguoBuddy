import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-flashcard',
  imports: [LucideAngularModule],
  templateUrl: './flashcard.html',
  styleUrl: './flashcard.scss',
})
export class Flashcard {
  constructor(private router: Router) { }

    onHome() {
    this.router.navigateByUrl('');
    }

    flipCard() {
      const card = document.querySelector('.flashcard');
      const container = document.querySelector('.flashcard-container');
      if (card) {
        card.classList.toggle('flipped');
      }
      if (container) {
        container.classList.toggle('flipped');
      }
    }
}


    
