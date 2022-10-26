import {
  Controller,
  Get,
  Post,
  Header,
  HttpCode,
  Redirect,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { createTaskDTO } from '@src/task/dto/create-task.dto';
import { ITask } from './task.interface';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private testService: TaskService) {}

  @Get()
  getAllTasks(): ITask[] {
    return this.testService.getAllTasks();
  }

  @Get(':id')
  getTaskById(
    @Param('id', { transform: (id) => Number(id) }) id: number,
  ): ITask {
    return this.testService.getTaskById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(201)
  createTask(@Body() task: createTaskDTO): ITask {
    return this.testService.createTask(task);
  }
}
