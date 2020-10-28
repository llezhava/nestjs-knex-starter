import { UserRegisterDto, UserUpdateDto } from './dto/userData.dto';
import { UserService } from './user.service';
import {  Body, Controller, Get, Patch, Post,Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@src/auth/jwt-auth.guard';
import { responseSuccess } from '@src/common/responseTypes';
import { GetUser } from '@src/common/getUser';
import { publicUserData } from './mapper/publicUserData';

@Controller('user')
export class UserController {
 constructor(private userService: UserService) {}

 @Post('signup')
 async signup(@Body() signupData: UserRegisterDto) {
  const {info, accessToken} = await this.userService.signup(signupData);
  return responseSuccess({
   info: publicUserData(info),
   accessToken,
  });
 }

 @UseGuards(JwtAuthGuard)
 @Patch('update')
 async update(@GetUser() user, @Body() updateData: UserUpdateDto) {
  const data = await this.userService.update(user.email, updateData);
  return responseSuccess(data);
 }

 @UseGuards(JwtAuthGuard)
 @Get('profile')
 async getProfile(@Request() req) {
  return req.user
 }
}
