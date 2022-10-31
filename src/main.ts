import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './exeption-filters/exception.filter';
import { mainLogger } from './middlewars/main-logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.use(mainLogger);
  await app.listen(3000);
}
bootstrap();
