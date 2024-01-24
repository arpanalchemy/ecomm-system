import { PartialType } from '@nestjs/swagger';
import { CreateVariantDto } from './create-variant.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsString } from 'class-validator';

enum Currency {
  USD = 'USD',
  INR = 'INR',
  GBP = 'GBP',
  EUR = 'EUR',
  CNY = 'CNY',
  BTC = 'BTC',
}

export class UpdateVariantDto extends PartialType(CreateVariantDto) {
  @ApiProperty()
  @IsInt()
  productId: number;

  @ApiProperty()
  @IsInt()
  itemPrice: number;

  @ApiProperty()
  @IsEnum(Currency)
  currency: Currency;

  @ApiProperty()
  @IsInt()
  SKU: number;
}
