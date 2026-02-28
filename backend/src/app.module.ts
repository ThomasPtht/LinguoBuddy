import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VocabularyService } from './vocabulary.service';
import { VocabularyController } from './vocabulary.controller';

@Module({
  imports: [],
  controllers: [AppController, VocabularyController],
  providers: [AppService, VocabularyService],
})
export class AppModule {}
