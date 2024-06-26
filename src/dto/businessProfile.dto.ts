import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class createbusinessProfileDto {
  @IsString()
  @MaxLength(30)
  readonly title: string;
  @IsString()
  @MaxLength(300)
  readonly bio: string;
  @IsString()
  countryCode: string;
  @IsNumber()
  @MaxLength(10)
  phone: Number;
  @IsString()
  gstin: string;
}
