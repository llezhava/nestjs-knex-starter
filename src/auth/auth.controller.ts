import { publicUserData } from './../user/mapper/publicUserData';
import { AuthService } from './auth.service';
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { responseSuccess } from '../common/responseTypes';


@Controller('auth')
export class AuthController {
 constructor(private authService: AuthService){}

 @UseGuards(LocalAuthGuard)
 @Post('login')
 async login (@Request() req) {
  const accessToken = await this.authService.login(req.user)
  const data = {
   info: publicUserData(req.user),
   accessToken,
  }
  return responseSuccess(data);
 }
}
