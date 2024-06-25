import {
  IsBoolean,
  IsNotEmpty,
  isNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { Date } from 'mongoose';

export class createUserDto {
  @IsString()
  @MaxLength(30)
  readonly name: string;
  @IsNumber()
  @IsNotEmpty()
  readonly age: number;
  @IsString()
  @IsNotEmpty()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
  @IsNumber()
  @IsNotEmpty()
  readonly mobile: string;
  @IsString()
  readonly token: string;
  @IsBoolean()
  readonly emailVerified: boolean;
}
