import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { JsonplaceholdersService } from '../jsonplaceholders/jsonplaceholders.service';

describe('ApiController', () => {
  let controller: ApiController;
  let jsonplaceholdersService: JsonplaceholdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiController],
      providers: [
        ApiService,
        {
          provide: JsonplaceholdersService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ApiController>(ApiController);
    jsonplaceholdersService = module.get<JsonplaceholdersService>(
      JsonplaceholdersService,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
