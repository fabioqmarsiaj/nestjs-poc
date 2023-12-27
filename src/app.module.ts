import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DogsModule } from './dogs/dogs.module';
import { logger } from './dogs/middleware/logger.middleware';

@Module({
  imports: [DogsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes('dogs');
  }
}
