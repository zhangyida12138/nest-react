import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { StatusModule } from './status/status.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [ConfigModule, StatusModule, PostsModule],
})
export class APIModule {}
