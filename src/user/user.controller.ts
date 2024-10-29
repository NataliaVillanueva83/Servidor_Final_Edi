import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { userModel } from './userModel';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Get()
  getUser() {
    return this.service.users;
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.service.getUserbyId(id);
  }

  @Post()
  postUser(@Body() newUser: userModel) {
    return this.service.postUser(newUser);
  }
  @Put(':id')
  putUser(@Body() newUser: userModel, @Param('id') id: string) {
    return this.service.putUser(newUser, id);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.service.deleteUser(id);
  }
}
