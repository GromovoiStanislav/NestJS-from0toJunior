import { ITask, Status } from './task.interface';

export class Task implements ITask {
  task: string;
  id: number = Date.now();
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  status: Status = Status.CREATED;
  tags: string[] = [];

  constructor(task: string, tags?: string[], status?: Status) {
    this.task = task;
    this.tags = tags;
    this.status = status;
  }
}
