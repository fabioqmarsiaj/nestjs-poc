import { Test, TestingModule } from '@nestjs/testing';
import { JsonplaceholdersService } from './jsonplaceholders.service';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { of } from 'rxjs';

const mockResponse = (response, status?) => {
  return jest.fn().mockReturnValue(
    of({
      data: response,
      status: status ?? 200,
      statusText: 'OK',
    }),
  );
};

describe('JsonplaceholdersService', () => {
  let service: JsonplaceholdersService;
  let httpService: HttpService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JsonplaceholdersService,
        {
          provide: HttpService,
          useValue: {
            post: jest.fn(),
            get: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<JsonplaceholdersService>(JsonplaceholdersService);
    httpService = module.get<HttpService>(HttpService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create a register', async () => {
    const expected = { id: 1, title: 'foo', body: 'bar', userId: 2 };

    configService.get = jest.fn().mockReturnValueOnce('any');
    httpService.post = mockResponse(expected);

    const actual = await service.create(expected);

    expect(actual).toBeDefined();
    expect(actual).toEqual(expected);
  });

  it('should return all registers', async () => {
    const expected = [
      { id: 1, title: 'foo', body: 'bar', userId: 2 },
      { id: 2, title: 'foo', body: 'bar', userId: 3 },
    ];

    configService.get = jest.fn().mockReturnValueOnce('any');
    httpService.get = mockResponse(expected);

    const actual = await service.findAll();

    expect(actual).toBeDefined();
    expect(actual).toEqual(expected);
  });
});
