import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsString, IsEnum } from 'class-validator';

enum Status {
  PAID = 'paid',
  REFUNDED = 'refunded',
  CANCELLED = 'cancelled',
}

export class CreateOrderDto {
  @ApiProperty()
  @IsInt()
  userId: number;

  @ApiProperty()
  @IsDateString()
  date: Date;

  @ApiProperty()
  @IsEnum(Status)
  status: Status;

  @ApiProperty()
  @IsInt()
  totalQuantity: number;

  @ApiProperty()
  @IsInt()
  paidAmount: number;

  @ApiProperty()
  @IsInt()
  netAmount: number;
}
