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
} from '@nestjs/common';
import { AllExceptionsFilter } from '@src/exeption-filters/exception.filter';
import { createTaskDTO } from '@src/task/dto/create-task.dto';
import { ITask } from './task.interface';
import { TaskService } from './task.service';

//@UseFilters(AllExceptionsFilter)
@Controller('task')
export class TaskController {
  constructor(private testService: TaskService) {}

  @Get()
  getAllTasks(): ITask[] {
    //throw new Error('Какая-то ошибка');
    //throw new HttpException('Какая-то ошибка', 401);
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
