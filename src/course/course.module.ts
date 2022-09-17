import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { PrismaService } from '../prisma.service';
import { CourseController } from './course.controller';

@Module({
  providers: [CourseService, PrismaService],
  controllers: [CourseController],
})
export class CourseModule {}
