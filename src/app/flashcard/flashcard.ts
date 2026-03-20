import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VocabularyService } from '../services/vocabulary.service';
import { Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
export interface FlashcardData {
  expression: string;
  translation: string;
  example: string;
  category: string;
}

@Component({
  selector: 'app-flashcard',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './flashcard.html',
  styleUrl: './flashcard.scss',
})
export class Flashcard {
  isFlipped = false;
  flashcards: FlashcardData[] = [];
  currentIndex = 0;

  constructor(private router: Router, private vocabService: VocabularyService) { }

  errorMsg = '';

  isLoading = true;

async ngOnInit() {
  try {
    const allCards = await this.vocabService.getAll();
    if (!allCards || allCards.length === 0) {
      this.errorMsg = 'Aucune carte disponible.';
      this.flashcards = [];
    } else {
      this.flashcards = this.pickRandomFlashcards(allCards, 10);
      this.currentIndex = 0;
    }
  } catch (e) {
    this.errorMsg = 'Erreur lors du chargement des cartes.';
    this.flashcards = [];
  } finally {
    this.isLoading = false;
  }
}

  pickRandomFlashcards(cards: any[], count: number): FlashcardData[] {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }

  onHome() {
    this.router.navigateByUrl('');
  }

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }

  shuffleFlashcards() {
    for (let i = this.flashcards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.flashcards[i], this.flashcards[j]] = [this.flashcards[j], this.flashcards[i]];
    }
  }

  showNewCard() {
    this.isFlipped = false;
    if (this.flashcards.length > 1) {
      this.currentIndex = (this.currentIndex + 1) % this.flashcards.length;
    }
  }

  markMastered() {
    this.flashcards.splice(this.currentIndex, 1);
    this.isFlipped = false;
    if (this.flashcards.length === 0) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = this.currentIndex % this.flashcards.length;
    }
  }

  get currentFlashcard(): FlashcardData {
    return this.flashcards[this.currentIndex];
  }
}


    
