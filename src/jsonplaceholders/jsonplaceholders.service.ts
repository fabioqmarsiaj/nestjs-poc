import { Injectable } from '@nestjs/common';
import { CreateJsonplaceholderDto } from './dto/create-jsonplaceholder.dto';
import { UpdateJsonplaceholderDto } from './dto/update-jsonplaceholder.dto';

@Injectable()
export class JsonplaceholdersService {
  create(createJsonplaceholderDto: CreateJsonplaceholderDto) {
    return 'This action adds a new jsonplaceholder';
  }

  findAll() {
    return `This action returns all jsonplaceholders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jsonplaceholder`;
  }

  update(id: number, updateJsonplaceholderDto: UpdateJsonplaceholderDto) {
    return `This action updates a #${id} jsonplaceholder`;
  }

  remove(id: number) {
    return `This action removes a #${id} jsonplaceholder`;
  }
}
