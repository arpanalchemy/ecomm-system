import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class CreateProductHasTagDto {
    @ApiProperty()
    @IsInt()
    productId: number;
  
    @ApiProperty()
    @IsInt()
    tagId: number;
}
