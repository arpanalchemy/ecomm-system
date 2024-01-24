import { PartialType } from '@nestjs/swagger';
import { CreateOrderDetailDto } from './create-order-detail.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt } from 'class-validator';

export class UpdateOrderDetailDto extends PartialType(CreateOrderDetailDto) {
  @ApiProperty()
  @IsInt()
  orderId: number;

  @ApiProperty()
  @IsInt()
  productId: number;

  @ApiProperty()
  @IsInt()
  addressId: number;

  @ApiProperty()
  @IsDateString()
  receivedAt: Date;

  @ApiProperty()
  @IsDateString()
  transmittedAt: Date;

  @ApiProperty()
  @IsInt()
  orderPrice: number;

  @ApiProperty()
  @IsInt()
  deliveryCharges: number;

  @ApiProperty()
  @IsInt()
  taxes: number;

  @ApiProperty()
  @IsInt()
  total: number;
}
