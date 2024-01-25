import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDto {
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
  // @IsArray()
  @IsOptional()
  media: string[];

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
  size: string;

  @ApiProperty()
  @IsString()
  // @IsNumber({}, { each: true })
  price: string;
}
