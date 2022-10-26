import {
  IsString,
  IsOptional,
  IsEnum,
  IsNotEmpty,
  ArrayNotEmpty,
} from 'class-validator';
import { Status } from '../task.interface';

export class createTaskDTO {
  @IsString({ message: 'Назватие обязательно' })
  @IsNotEmpty({ message: 'Назватие обязательно' })
  task: string;

  @IsOptional()
  @ArrayNotEmpty({ message: 'Необходимо указать теги' })
  @IsString({ each: true, message: 'Теги должны быть строками' })
  tags?: string[];

  @IsOptional()
  @IsEnum(Status, { message: 'Не верный тип статуса' })
  status?: Status;
}
