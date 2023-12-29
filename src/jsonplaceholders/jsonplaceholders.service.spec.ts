import { Test, TestingModule } from '@nestjs/testing';
import { JsonplaceholdersService } from './jsonplaceholders.service';

describe('JsonplaceholdersService', () => {
  let service: JsonplaceholdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JsonplaceholdersService],
    }).compile();

    service = module.get<JsonplaceholdersService>(JsonplaceholdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
