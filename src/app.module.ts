import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { MusicService } from './music/music.service';
import { MusicController } from './music/music.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, MusicController],
  providers: [AppService, UserService, MusicService],
})
export class AppModule {}
