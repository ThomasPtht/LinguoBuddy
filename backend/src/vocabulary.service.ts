import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class VocabularyService {
  private prisma = new PrismaClient();

  async getStats() {
    const [total, newCount, learning, mastered] = await Promise.all([
      this.prisma.vocabulary.count(),
      this.prisma.vocabulary.count({ where: { status: 'New' } }),
      this.prisma.vocabulary.count({ where: { status: 'Learning' } }),
      this.prisma.vocabulary.count({ where: { status: 'Mastered' } }),
    ]);

    return {
      total,
      new: newCount,
      learning,
      mastered,
    };
  }
}