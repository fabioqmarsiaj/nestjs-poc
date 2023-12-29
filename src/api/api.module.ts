import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { JsonplaceholdersModule } from 'src/jsonplaceholders/jsonplaceholders.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [JsonplaceholdersModule, HttpModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
