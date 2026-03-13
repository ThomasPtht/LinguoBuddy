import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms"

@Component({
  selector: 'app-vocabulary-entry-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vocabulary-entry-form.html',
  styleUrl: './vocabulary-entry-form.scss',
})
export class VocabularyEntryForm {

  vocabularyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.vocabularyForm = this.fb.group({
      expression: ['', Validators.required],
      translation: ['', Validators.required],
      contextSentence: ['', Validators.required],
    });
  }

//   onSubmit() {
//     if (this.vocabularyForm.valid) {

//       const newEntry = {
// ...this.vocabularyForm.value,
// createdAt: new Date(),
// status: 'new',
// category
//       };
//       } 
//       // Here you would typically send the new entry to your backend or service

//       this.vocabularyForm.reset();
//     } else {
//       console.log('Form is invalid');
//     } 
//   }

}
