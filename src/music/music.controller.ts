import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MusicService } from './music.service';
import { musicModel } from './musicModel';

@Controller('music')
export class MusicController {
  constructor(private readonly service: MusicService) {}
  @Get()
  getAllSong() {
    return this.service.music;
  }
  @Get('song/:song')
  getSong(@Param('song') song: string) {
    return this.service.getSong(song);
  }
  @Get('artist/:artist')
  getSongsbyArtist(@Param('artist') artist: string) {
    return this.service.getSongByArtist(artist);
  }
  @Post()
  postSong(@Body() newMusic: musicModel) {
    return this.service.postSong(newMusic);
  }

  @Put('song/:song')
  putSong(@Body() newMusic: musicModel, @Param('song') song: string) {
    return this.service.putSong(newMusic, song);
  }
  @Delete('song/:song')
  deleteSong(@Param('song') song: string) {
    return this.service.deleteSong(song);
  }
}
