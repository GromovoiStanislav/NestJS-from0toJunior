import {
  Controller,
  Get,
  Post,
  Header,
  HttpCode,
  Redirect,
  Param,
  Body,
} from '@nestjs/common';
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

  @Post()
  @HttpCode(201)
  createTask(@Body('task') task: string): ITask {
    return this.testService.createTask(task);
  }
}
