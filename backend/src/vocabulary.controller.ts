import { Controller, Get } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';

@Controller('vocabulary')
export class VocabularyController {
  constructor(private readonly vocabularyService: VocabularyService) {}

  @Get('stats')
  async getStats() {
    return this.vocabularyService.getStats();
  }
}