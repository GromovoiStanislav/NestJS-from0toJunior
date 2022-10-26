import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Status } from '../task.interface';
import { createTaskDTO } from './create-task.dto';

describe('create-task.dto.ts', () => {
  let dto;

  beforeAll(() => {
    dto = {
      task: '',
      tags: [],
      status: '',
    };
  });

  it('task пустая Ошибка', async () => {
    const ofImportDto = plainToInstance(createTaskDTO, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('task')).toBeTruthy();
  });

  it('task не пустая Успех', async () => {
    dto.task = 'Заголовок';
    const ofImportDto = plainToInstance(createTaskDTO, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('task')).toBeFalsy();
  });

  it('tags пустой Ошибка', async () => {
    const ofImportDto = plainToInstance(createTaskDTO, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('tags')).toBeTruthy();
    expect(dto.tags.length).toBe(0);
  });

  it('Не каждый элемент tags является строкой Ошибка', async () => {
    dto.tags = ['str', 1];
    const ofImportDto = plainToInstance(createTaskDTO, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('tags')).toBeTruthy();
    expect(dto.tags.length).not.toBe(0);
    expect(dto.tags.every((el) => typeof el === 'string')).toBeFalsy();
  });

  it('Каждый элемент tags является строкой Успех', async () => {
    dto.tags = ['str', 'str'];
    const ofImportDto = plainToInstance(createTaskDTO, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('tags')).toBeFalsy();
    expect(dto.tags.length).not.toBe(0);
    expect(dto.tags.every((el) => typeof el === 'string')).toBeTruthy();
  });

  it('status не верный тип 1 Ошибка', async () => {
    const ofImportDto = plainToInstance(createTaskDTO, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('status')).toBeTruthy();
  });

  it('status не верный тип 2 Ошибка', async () => {
    dto.status = 'str';
    const ofImportDto = plainToInstance(createTaskDTO, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('status')).toBeTruthy();
  });

  it('status верный тип Успех', async () => {
    dto.status = 'processing';
    const ofImportDto = plainToInstance(createTaskDTO, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('status')).toBeFalsy();
    expect(dto.status).toBe(Status.PROCESSING);
  });
});
