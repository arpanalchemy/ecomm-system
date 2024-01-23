import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateColorDto } from './create-color.dto';

export class UpdateColorDto extends PartialType(CreateColorDto) {
    @ApiProperty()
    name:string
}

