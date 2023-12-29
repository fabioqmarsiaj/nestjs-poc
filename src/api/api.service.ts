import { Injectable } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { JsonplaceholdersService } from 'src/jsonplaceholders/jsonplaceholders.service';

@Injectable()
export class ApiService {
  constructor(private jsonPlaceHolderService: JsonplaceholdersService) {}
  async create(createApiDto: CreateApiDto): Promise<CreateApiDto> {
    return await this.jsonPlaceHolderService.create(createApiDto);
  }

  async findAll(): Promise<CreateApiDto[]> {
    return await this.jsonPlaceHolderService.findAll();
  }

  async findOne(id: number): Promise<CreateApiDto> {
    return await this.jsonPlaceHolderService.findOne(id);
  }

  update(id: number, updateApiDto: UpdateApiDto) {
    return this.jsonPlaceHolderService.update(id, updateApiDto);
  }

  remove(id: number) {
    return this.jsonPlaceHolderService.remove(id);
  }
}
