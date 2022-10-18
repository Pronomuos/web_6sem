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
import { ChatModule } from './chat/chat.module';
import { AuthModule } from './auth/auth.module';
import { apikey, appInfo, connectionUri } from './config';
import { AuthRedirectMiddleware } from './auth/auth.redirect.middleware';

@Module({
  imports: [
    AuthModule.forRoot({
      connectionURI: connectionUri,
      apiKey: apikey,
      appInfo: appInfo,
    }),
    ConfigModule.forRoot(),
    LanguageModule,
    SkillModule,
    CourseModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthRedirectMiddleware).forRoutes(AppController);
  }
}
