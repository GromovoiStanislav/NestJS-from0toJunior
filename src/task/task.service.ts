import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
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

  createTask(task: string): ITask {
    const newTask = new Task(task);
    this.tasks.push(newTask);
    return newTask;
  }
}
