import { Module } from '@nestjs/common';
import { JsonplaceholdersService } from './jsonplaceholders.service';

@Module({
  providers: [JsonplaceholdersService],
})
export class JsonplaceholdersModule {}
