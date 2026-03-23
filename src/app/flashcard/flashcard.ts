import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { VocabularyService } from '../services/vocabulary.service';
import { VocabularyItem } from '../models/vocabulary.model';
import { Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-flashcard',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './flashcard.html',
  styleUrl: './flashcard.scss',
})
export class Flashcard {
  isFlipped = false;
  flashcards: VocabularyItem[] = [];
  currentIndex = 0;
  errorMsg = '';
  isLoading = true;

  constructor(
    private router: Router,
    private vocabService: VocabularyService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.vocabService.getAll().subscribe({
      next: (allCards) => {
        if (!allCards || allCards.length === 0) {
          this.errorMsg = 'Aucune carte disponible.';
        } else {
          this.flashcards = this.pickRandomFlashcards(allCards, 10);
          this.currentIndex = 0;
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMsg = 'Erreur lors du chargement des cartes.';
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  pickRandomFlashcards(cards: VocabularyItem[], count: number): VocabularyItem[] {
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
    this.currentIndex = this.flashcards.length === 0 ? 0 : this.currentIndex % this.flashcards.length;
  }

  get currentFlashcard(): VocabularyItem {
    return this.flashcards[this.currentIndex];
  }
}