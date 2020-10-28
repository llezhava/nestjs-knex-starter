import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserDatabaseService } from './user.database.service';
import { AuthModule } from '@src/auth/auth.module';

@Module({
  imports: [
    forwardRef(() => AuthModule),
  ],
  controllers: [UserController],
  providers: [UserService, UserDatabaseService],
  exports: [UserService],
})
export class UserModule {}
