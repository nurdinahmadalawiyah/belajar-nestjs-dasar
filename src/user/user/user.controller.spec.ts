import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import * as httpMocks from 'node-mocks-http';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      imports: [],
      providers: [],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should can say hello', async () => {
    const response = await controller.sayHello('Nurdin', 'Alawiyah');
    expect(response).toBe('Hello Nurdin Alawiyah');
  });

  it('should can get view', async () => {
    const response = httpMocks.createResponse();
    controller.viewHello('Nurdin', response);

    expect(response._getRenderView()).toBe('index.html');
    expect(response._getRenderData()).toEqual({
      name: 'Nurdin',
      title: 'Template Engine',
    });
  });
});
