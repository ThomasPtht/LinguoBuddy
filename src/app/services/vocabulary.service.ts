import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // ← utilise PrismaService

@Injectable()
export class VocabularyService {
  constructor(private prisma: PrismaService) {} // ← inject proprement

  async getStats() {
    const [total, newCount, learning, mastered] = await Promise.all([
      this.prisma.vocabulary.count(),
      this.prisma.vocabulary.count({ where: { status: 'New' } }),
      this.prisma.vocabulary.count({ where: { status: 'Learning' } }),
      this.prisma.vocabulary.count({ where: { status: 'Mastered' } }),
    ]);

    return { total, new: newCount, learning, mastered };
  }

  async create(data: any) {
    return this.prisma.vocabulary.create({
      data: {
        expression: data.expression,
        translation: data.translation,
        category: data.category,
        contextSentence: data.contextSentence,
        status: 'New',
      }
    });
  }
}