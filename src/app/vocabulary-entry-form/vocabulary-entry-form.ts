import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vocabulary-entry-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vocabulary-entry-form.html',
  styleUrl: './vocabulary-entry-form.scss',
})
export class VocabularyEntryForm {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private toastr = inject(ToastrService);

  private apiUrl = 'http://localhost:3000';

  isAnalyzing = false;
  isChecking = false;
  checkResult: { isCorrect: boolean; feedback: string; correctedSentence: string } | null = null;

  vocabularyForm = this.fb.group({
    expression: ['', Validators.required],
    translation: ['', Validators.required],
    category: ['', Validators.required],
    contextSentence: ['', Validators.required],
  });

  // Appelé quand le user quitte le champ expression
  onExpressionBlur() {
    const expression = this.vocabularyForm.get('expression')?.value;
    if (!expression) return;

    this.isAnalyzing = true;
    this.checkResult = null;

    this.http.get<{ translation: string; category: string }>(
      `${this.apiUrl}/gemini/analyze?expression=${encodeURIComponent(expression)}`
    ).subscribe({
      next: (result) => {
        this.vocabularyForm.patchValue({
          translation: result.translation,
          category: result.category,
        });
        this.isAnalyzing = false;
      },
      error: () => {
        this.toastr.error('Could not analyze expression', 'Error');
        this.isAnalyzing = false;
      }
    });
  }

  // Vérifie la phrase du user
  onCheckSentence() {
    const expression = this.vocabularyForm.get('expression')?.value;
    const sentence = this.vocabularyForm.get('contextSentence')?.value;
    if (!expression || !sentence) return;

    this.isChecking = true;

    this.http.post<{ isCorrect: boolean; feedback: string; correctedSentence: string }>(
      `${this.apiUrl}/gemini/check`,
      { expression, sentence }
    ).subscribe({
      next: (result) => {
        this.checkResult = result;
        this.isChecking = false;
      },
      error: () => {
        this.toastr.error('Could not check sentence', 'Error');
        this.isChecking = false;
      }
    });
  }

  onSubmit() {
    if (this.vocabularyForm.invalid) return;

    this.http.post(`${this.apiUrl}/vocabulary`, this.vocabularyForm.value).subscribe({
      next: () => {
        this.toastr.success('Expression saved!', 'Success 🎉');
        this.vocabularyForm.reset();
        this.checkResult = null;
      },
      error: () => {
        this.toastr.error('Could not save expression', 'Error');
      }
    });
  }
}