import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { CONFIG_MODULE } from './_common/infrastructure/env';
import { typeormService } from './_common/infrastructure/typeorm.service';

@Module({
  imports: [CONFIG_MODULE, typeormService, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
