import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchDto } from 'src/users/dto/search.dto';
import { SocialsService } from './socials.service';
import { UpdateSocialDto } from './dto/update-social.dto';
import { CreateSocialDto } from './dto/create-social.dto';

@ApiTags('Socials')
@Controller('socials')
export class SocialsController {
  constructor(private readonly socialsService: SocialsService) {}

  @ApiOperation({ summary: 'Create a new social' })
  @Post()
  create(@Body() CreateSocialDto: CreateSocialDto) {
    return this.socialsService.create(CreateSocialDto);
  }

  @ApiOperation({ summary: 'Find all socials' })
  @Get()
  findAll(@Query() searchDto: SearchDto) {
    return this.socialsService.findAll(searchDto);
  }

  @ApiOperation({ summary: 'Find social by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update social by id' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateSocialDto: UpdateSocialDto) {
    return this.socialsService.update(+id, UpdateSocialDto);
  }

  @ApiOperation({ summary: 'Remove social' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialsService.remove(+id);
  }
}
