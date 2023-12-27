import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RecordDto } from './record.dto';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): string {
    return this.appService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string): string {
    return this.appService.find(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() recordDto: RecordDto): RecordDto {
    return this.appService.create(recordDto);
  }
}
