import { Module } from '@nestjs/common';
import { JsonplaceholdersService } from './jsonplaceholders.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [JsonplaceholdersService],
  exports: [JsonplaceholdersService],
})
export class JsonplaceholdersModule {}
