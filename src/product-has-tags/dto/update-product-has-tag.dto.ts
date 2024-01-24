import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductHasTagDto } from './create-product-has-tag.dto';
import { IsInt } from 'class-validator';

export class UpdateProductHasTagDto extends PartialType(CreateProductHasTagDto) {
    @ApiProperty()
    @IsInt()
    productId: number;
  
    @ApiProperty()
    @IsInt()
    tagId: number;
}
