import { HttpException, HttpStatus } from '@nestjs/common';

interface Error {
  message?: never;
  error?: never;
  createdAt?: never;
  [k: string]: string;
}

export class NotFoundTaskException extends HttpException {
  constructor(error: Error = null) {
    super(
      {
        message: 'Task не найден',
        error: 'not_foud_task_exeption',
        createdAt: new Date(),
        ...error,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
