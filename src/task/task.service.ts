import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { createTaskDTO } from '@src/task/dto/create-task.dto';
import { NotFoundTaskException } from './exeptions/not-found.exception';
import { Task } from './task.entity';
import { ITask } from './task.interface';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];

  getAllTasks(): ITask[] {
    return this.tasks;
  }

  getTaskById(id: number): ITask {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      //throw new HttpException('Task не найден', HttpStatus.NOT_FOUND);
      //throw new NotFoundException({message: 'Task не найден',error: 'Наша ошибка',});
      throw new NotFoundTaskException({ other: 'что-то ещё' });
    }
    return task;
  }

  createTask({ task, tags, status }: createTaskDTO): ITask {
    const newTask = new Task(task, tags, status);
    this.tasks.push(newTask);
    return newTask;
  }
}
