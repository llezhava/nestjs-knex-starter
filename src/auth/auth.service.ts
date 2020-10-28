import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
 constructor(private jwtService: JwtService) {}

 async login(user: any) {
  const payload = { id: user.id };
  return {
    accessToken: this.jwtService.sign(payload),
  };
}
}
