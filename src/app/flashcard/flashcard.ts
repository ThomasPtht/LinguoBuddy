import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-flashcard',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './flashcard.html',
  styleUrl: './flashcard.scss',
})
export class Flashcard {
  isFlipped = false;
  constructor(private router: Router) { }

  onHome() {
    this.router.navigateByUrl('');
  }

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}


    
