import { JwtStrategy } from './jwt.strategy';
import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '@src/user/user.module';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from '@src/config/jwt';





@Module({
  imports: [forwardRef(() => UserModule), JwtModule.register({ secret: jwtConfig.secret})],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
