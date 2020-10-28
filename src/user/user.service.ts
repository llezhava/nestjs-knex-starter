import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserUpdateDto } from './dto/userData.dto';
import { UserRegisterDto } from './dto/userData.dto';
import { AuthService } from '@src/auth/auth.service';
import { UserDatabaseService } from './user.database.service';
import { User } from './types';
import { publicUserData } from './mapper';

@Injectable()
export class UserService {
  constructor(
    private authService: AuthService,
    private userdb: UserDatabaseService,
  ) {}

  async signup(userData: UserRegisterDto) {
    const { email, password } = userData;
    const existingUser = await this.userdb.findByEmail(email);

    if (existingUser) {
      throw new ConflictException({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await this.hashPassword(password, salt);

    const info = await this.userdb.signup({ email, password: hashedPassword });
    const accessToken = await (await this.authService.login(info)).accessToken;

    return { info: publicUserData(info), accessToken };
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userdb.findByEmail(email);
    if (!user) return null;

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (isValidPassword) {
      return user;
    }
  }

  async userById(id: number): Promise<User> {
    const result = await this.userdb.findById(id);
    return publicUserData(result);
  }

  async update(userEmail, updateData: UserUpdateDto) {
    const result = await this.userdb.updateUser(userEmail, updateData);

    return publicUserData(result);
  }

  private hashPassword(password, salt) {
    return bcrypt.hash(password, salt);
  }
}
