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
}


    
