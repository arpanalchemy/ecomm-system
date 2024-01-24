import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import {
  IsDate,
  IsDateString,
  IsEmail,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsDateString()
  dateOfBirth: string;

  @ApiProperty()
  @Length(10, 10)
  mobileNo: string;

  @ApiProperty()
  @Length(4, 4, { message: 'Password must be 4 characters long' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/,
    {
      message:
        'Must contain at least one uppercase, one lowercase, one digit, and one special character',
    },
  )
  password: string;
}
