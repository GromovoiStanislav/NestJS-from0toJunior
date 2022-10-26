export interface ITask {
  id: number;
  task: string;
  status: Status;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export enum Status {
  CREATED = 'created',
  PROCESSING = 'processing',
  ABORTED = 'aborted',
  ERROR = 'error',
  DONE = 'done',
}
