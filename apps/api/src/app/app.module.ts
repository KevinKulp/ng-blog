import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../environments/environment';
import { AppController } from './app.controller';
import { PostEntity } from './post/post-entity';

import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: environment.db_host,
      port: environment.db_port,
      username: environment.db_username,
      password: environment.db_password,
      database: environment.db_database,
      entities: [PostEntity], // only need this here bc im hydrating in app.controller, maybe move it?
      synchronize: true, // only for local env, investigate schema:sync command & migration techniques
    }),
    PostModule
  ],
  controllers: [AppController]
})
export class AppModule {}
