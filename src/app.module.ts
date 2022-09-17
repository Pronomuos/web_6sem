import {
  Module,
  MiddlewareConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LanguageModule } from './language/language.module';
import { SkillModule } from './skill/skill.module';
import { CourseModule } from './course/course.module';
import { NotebookModule } from './notebook/notebook.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    LanguageModule,
    SkillModule,
    CourseModule,
    NotebookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
