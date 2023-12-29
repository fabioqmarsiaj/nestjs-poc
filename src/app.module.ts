import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { JsonplaceholdersModule } from './jsonplaceholders/jsonplaceholders.module';

@Module({
  imports: [ApiModule, JsonplaceholdersModule],
})
export class AppModule {}
