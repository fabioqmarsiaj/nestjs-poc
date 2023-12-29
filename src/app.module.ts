import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { JsonplaceholdersModule } from './jsonplaceholders/jsonplaceholders.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ApiModule,
    JsonplaceholdersModule,
    ConfigModule.forRoot({
      envFilePath: '.env.local',
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
