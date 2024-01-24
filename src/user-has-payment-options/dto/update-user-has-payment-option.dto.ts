import { PartialType } from '@nestjs/swagger';
import { CreateUserHasPaymentOptionDto } from './create-user-has-payment-option.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsString } from 'class-validator';

export class UpdateUserHasPaymentOptionDto extends PartialType(
  CreateUserHasPaymentOptionDto,
) {
  @ApiProperty()
  @IsInt()
  userId: number;

  @ApiProperty()
  @IsInt()
  cardNumber: number;

  @ApiProperty()
  @IsString()
  cardHolderName: string;

  @ApiProperty()
  @IsDateString()
  expiryDate: Date;

  @ApiProperty()
  @IsInt()
  cvv: number;
}
