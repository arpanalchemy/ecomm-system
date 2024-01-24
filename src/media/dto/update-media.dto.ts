import { PartialType } from '@nestjs/swagger';
import { CreateMediaDto } from './create-media.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
export class UpdateMediaDto extends PartialType(CreateMediaDto) {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  path: string;

  @ApiProperty()
  @IsInt()
  size: number;

  @ApiProperty()
  @IsString()
  mimeType: string;
}
