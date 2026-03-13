import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { GeminiService } from './gemini.service';

@Controller('gemini')
export class GeminiController {
  constructor(private geminiService: GeminiService) {}

  @Get('analyze')
  analyze(@Query('expression') expression: string) {
    return this.geminiService.analyzeExpression(expression);
  }

  @Post('check')
  check(@Body() body: { expression: string; sentence: string }) {
    return this.geminiService.checkSentence(body.expression, body.sentence);
  }
}