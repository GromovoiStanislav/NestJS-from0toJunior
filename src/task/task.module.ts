import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from './middlewars/logger.middleware';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //consumer.apply(LoggerMiddleware).forRoutes(TaskController);
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'task', method: RequestMethod.POST });
  }
}
