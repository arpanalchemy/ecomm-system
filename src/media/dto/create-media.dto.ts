import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateMediaDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  path: string;

  @ApiProperty()
  @IsInt()
  size: number;

  @ApiProperty()
  @IsString()
  mimeType: string;
}
