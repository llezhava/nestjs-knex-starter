import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserRegisterDto {
 @IsEmail()
 email: string;

 @IsNotEmpty()
 password: string;
}

export class UserUpdateDto {
 // TODO: Remove it when I add token
 email: string;
 firstName: string;
 lastName: string;
 phone: string;
}