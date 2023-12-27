import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from './interfaces/dog';
import { DogDto } from './dto/dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get()
  async findAll(): Promise<Dog[]> {
    return this.dogsService.findAll();
  }

  @Post()
  @HttpCode(201)
  async create(@Body() dogDto: DogDto) {
    return this.dogsService.create(dogDto);
  }
}
