import { Injectable } from '@nestjs/common';
import { Dog } from './interfaces/dog';
import { DogDto } from './dto/dog.dto';

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = [];

  findAll(): Dog[] {
    return this.dogs;
  }

  create(dogDto: DogDto) {
    this.dogs.push(dogDto);
  }
}
