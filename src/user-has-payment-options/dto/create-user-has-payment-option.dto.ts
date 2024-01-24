import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreateUserHasPaymentOptionDto {
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
