import { Injectable } from '@nestjs/common';
import { ITask } from './task.interface';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [
    { id: 1, task: 'Task 1' },
    { id: 2, task: 'Task 2' },
    { id: 3, task: 'Task 3' },
  ];

  getAllTasks(): ITask[] {
    return this.tasks;
  }

  getTaskById(id: number): ITask {
    return this.tasks.find((t) => t.id === id);
  }

  createTask(task: ITask): ITask {
    this.tasks.push(task);
    return task;
  }
}
