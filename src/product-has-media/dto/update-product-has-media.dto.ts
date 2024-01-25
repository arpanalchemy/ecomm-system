import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductHasMediaDto } from './create-product-has-media.dto';
import { IsInt } from 'class-validator';

export class UpdateProductHasMediaDto extends PartialType(
  CreateProductHasMediaDto,
) {
  @ApiProperty()
  @IsInt()
  productId: number;

  @ApiProperty()
  @IsInt()
  mediaId: number;
}
