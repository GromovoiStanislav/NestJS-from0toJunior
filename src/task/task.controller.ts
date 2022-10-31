import {
  UseFilters,
  HttpException,
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
  ParseIntPipe,
} from '@nestjs/common';
import { AllExceptionsFilter } from '@src/exeption-filters/exception.filter';
import { createTaskDTO } from '@src/task/dto/create-task.dto';
import { EmailPipe } from './pipes/email.pipe';
import { ITask } from './task.interface';
import { TaskService } from './task.service';

//@UseFilters(AllExceptionsFilter)
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAllTasks(): ITask[] {
    //throw new Error('Какая-то ошибка');
    //throw new HttpException('Какая-то ошибка', 401);
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id', ParseIntPipe) id: number): ITask {
    return this.taskService.getTaskById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(201)
  createTask(@Body() task: createTaskDTO): ITask {
    return this.taskService.createTask(task);
  }

  @Get('email/:email')
  getTasksByEmail(@Param('email', EmailPipe) email: string): ITask[] {
    return this.taskService.getTasksByEmail(email);
  }
}
