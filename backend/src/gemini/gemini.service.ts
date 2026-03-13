import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';

@Injectable()
export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
  }

  async analyzeExpression(expression: string) {
    const prompt = `
      Analyze this English expression: "${expression}"
      Return ONLY a JSON object, no markdown, no backticks:
      {
        "translation": "French translation",
        "category": "one of: Idiom, Expression, PhrasalVerb, Vocabulary"
      }
    `;

    const response = await this.ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const text = (response.text ?? '').trim();
    return JSON.parse(text);
  }

  async checkSentence(expression: string, sentence: string) {
    const prompt = `
      The user is learning English and practicing: "${expression}"
      Their sentence: "${sentence}"
      Return ONLY a JSON object, no markdown, no backticks:
      {
        "isCorrect": true or false,
        "feedback": "short explanation in French",
        "correctedSentence": "corrected version if wrong, same if correct"
      }
    `;

    const response = await this.ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-04-17',
      contents: prompt,
    });

    const text = (response.text ?? '').trim();
    return JSON.parse(text);
  }
}