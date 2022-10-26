import { Injectable } from '@nestjs/common';
import { createTaskDTO } from '@src/task/dto/create-task.dto';
import { Task } from './task.entity';
import { ITask } from './task.interface';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];

  getAllTasks(): ITask[] {
    return this.tasks;
  }

  getTaskById(id: number): ITask {
    return this.tasks.find((t) => t.id === id);
  }

  createTask({ task, tags, status }: createTaskDTO): ITask {
    const newTask = new Task(task, tags, status);
    this.tasks.push(newTask);
    return newTask;
  }
}
