import { Injectable } from '@nestjs/common';
import { userModel } from './userModel';

@Injectable()
export class UserService {
  users = [];
  constructor() {
    let user = {
      id: '1',
      name: 'Justina',
      username: 'Justi2021',
    };
    this.users.push(user);
    user = {
      id: '2',
      name: 'Luis',
      username: 'Luis2021',
    };
    this.users.push(user);
    user = {
      id: '3',
      name: 'Maria',
      username: 'Maria2021',
    };
    this.users.push(user);
  }
  getUser(_id: string) {
    return this.users;
  }

  getUserbyId(id: string) {
    for (let i = 0; i < this.users.length; i++) {
      const usuario = this.users[i];
      if (usuario.id === id) {
        return this.users[i];
      }
    }
  }

  postUser(user: userModel) {
    const newUser = {
      id: user.id,
      name: user.name,
      username: user.username,
    };
    this.users.push(newUser);
    return newUser;
  }

  putUser(newUser: userModel, id: string): string {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        this.users[i] = newUser;
        return 'Usuario actualizado';
        //ver si actualiza todo o buscar por extension: .name, .id
      }
    }
  }
  deleteUser(id: string): string {
    for (let i = 0; i < this.users.length; i++) {
      const usuario = this.users[i];
      if (usuario.id === id) {
        this.users.splice(i, 1);
        return 'Usuario eliminado';
      }
    }
  }
}
