import { Injectable } from '@nestjs/common';
import { musicModel } from './musicModel';

@Injectable()
export class MusicService {
  music = [];
  constructor() {
    const musica = {
      id: '1',
      song: 'Lola',
      artist: 'Zenon',
      album: 'La granja de Zenon vol.1',
    };
    this.music.push(musica);
    this.music.push({
      id: '2',
      song: 'Ronda de Conejos',
      artist: 'La granja de Zenon',
      album: 'La granja de Zenon vol.3',
    });
    this.music.push({
      id: '3',
      song: 'Ronda de Conejos',
      artist: 'Luli Pampin',
      album: 'Luli Pampin 2023',
    });
    this.music.push({
      id: '4',
      song: 'Camino por la selva',
      artist: 'Luli Pampin',
      album: 'Luli Pampin 2023',
    });
    this.music.push({
      id: '5',
      song: 'La lechuza',
      artist: 'El payaso plim plim',
      album: 'Plim plim vol.3',
    });
  }
  getAllSongs() {
    return this.music;
  }
  getSong(song: string) {
    for (let i = 0; i < this.music.length; i++) {
      const musica = this.music[i];
      if (musica.song === song) {
        return this.music[i];
      }
    }
  }
  getSongByArtist(artist: string) {
    return this.music.filter((musica) => musica.artist === artist);
  }
  postSong(musica: musicModel) {
    const newSong = {
      id: musica.id,
      song: musica.song,
      artist: musica.artist,
      album: musica.album,
    };
    this.music.push(newSong);
    return newSong;
  }
  putSong(newMusic: musicModel, song: string): string {
    for (let i = 0; i < this.music.length; i++) {
      if (this.music[i].song === song) {
        this.music[i] = newMusic;
        return 'Cancion actualizada';
        //ver si actualiza todo o buscar por extension: .name, .id
      }
    }
  }
  deleteSong(song: string): string {
    for (let i = 0; i < this.music.length; i++) {
      const cancion = this.music[i];
      if (cancion.song === song) {
        this.music.splice(i, 1);
        return 'Cancion eliminada';
      }
    }
  }
}
