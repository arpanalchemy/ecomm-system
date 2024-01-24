import { PartialType } from '@nestjs/swagger';
import { CreateSocialDto } from './create-social.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
export class UpdateSocialDto extends PartialType(CreateSocialDto) {
  @ApiProperty()
  @IsInt()
  productId: number;

  @ApiProperty()
  @IsString()
  key: string;

  @ApiProperty()
  @IsString()
  value: string;
}
