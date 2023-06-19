import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  /**
   * Set API version.
   */
  app.setGlobalPrefix(configService.get('API_VERSION'));

  /**
   * Setup class validator.
   */
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(configService.get('PORT'));
}
bootstrap();
