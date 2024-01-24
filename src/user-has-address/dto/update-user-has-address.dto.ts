import { PartialType } from '@nestjs/swagger';
import { CreateUserHasAddressDto } from './create-user-has-address.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class UpdateUserHasAddressDto extends PartialType(
  CreateUserHasAddressDto,
) {
  @ApiProperty()
  @IsInt()
  userId: number;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsString()
  country: string;

  @ApiProperty()
  @IsInt()
  postalCode: number;

  @ApiProperty()
  @IsBoolean()
  isDefault: boolean;
}
