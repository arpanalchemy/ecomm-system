import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty()
  @IsString()
  createdBy: string;

  @ApiProperty()
  @IsString()
  categoryId: string;

  @ApiProperty()
  // @IsArray()
  @IsOptional()
  tags: string[];

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  // @IsInt()
  @IsString()
  weight: string;

  @ApiProperty()
  @IsString()
  collection: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  // @IsInt()
  @IsString()
  quantity: string;

  @ApiProperty()
  @IsString()
  // @IsNumber({}, { each: true })
  price: string;
}
