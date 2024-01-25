import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateProductHasMediaDto {
  @ApiProperty()
  @IsInt()
  productId: number;

  @ApiProperty()
  @IsInt()
  mediaId: number;
}
