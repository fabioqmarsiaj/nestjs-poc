import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post()
  async create(@Body() createApiDto: CreateApiDto): Promise<CreateApiDto> {
    return await this.apiService.create(createApiDto);
  }

  @Get()
  async findAll(): Promise<CreateApiDto[]> {
    return this.apiService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CreateApiDto> {
    return await this.apiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApiDto: UpdateApiDto) {
    return this.apiService.update(+id, updateApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiService.remove(+id);
  }
}
