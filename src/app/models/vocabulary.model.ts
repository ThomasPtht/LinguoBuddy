export interface VocabularyItem {
  id?: number | string;
  expression: string;
  translation: string;
  example: string;
  category: string;
  status?: 'new' | 'learning' | 'mastered';
}

export interface VocabularyStats {
  total: number;
  new: number;
  learning: number;
  mastered: number;
}