import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { PrismaService } from '../prisma.service';
import { LanguageController } from './language.controller';

@Module({
  providers: [LanguageService, PrismaService],
  controllers: [LanguageController],
})
export class LanguageModule {}