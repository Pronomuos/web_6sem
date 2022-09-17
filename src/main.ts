import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { AppModule } from './app.module';
import { LanguageModule } from './language/language.module';
import { SkillModule } from './skill/skill.module';
import { CourseModule } from './course/course.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const hbs = require('hbs');
  hbs.registerPartials(join(__dirname, '..', 'views', 'partials'));
  hbs.registerHelper('times', function (n, block) {
    let accum = '';
    for (let i = 1; i <= n; ++i) accum += block.fn(i);
    return accum;
  });

  const config = new DocumentBuilder()
    .setTitle('Reshetnikov Roman CV.')
    .setDescription('CV API description.')
    .setVersion('1.0')
    .addTag('ITMO web labs')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [LanguageModule, SkillModule, CourseModule],
  });

  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 8080);
  // await app.listen(8080);
}
bootstrap();
