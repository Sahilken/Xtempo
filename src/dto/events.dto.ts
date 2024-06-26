import {
  IsBoolean,
  IsNotEmpty,
  isNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class createUserDto {
  @IsString()
  @MaxLength(30)
  Title: string;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @IsString()
  ageGroup: string;
  @IsString()
  @IsNotEmpty()
  type: string;
}
