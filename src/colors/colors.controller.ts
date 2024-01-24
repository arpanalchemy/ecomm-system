import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ColorService } from './colors.service';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Query } from '@nestjs/common';
import { SearchDto } from 'src/users/dto/search.dto';

@ApiTags('Colors')
@Controller('colors')
export class ColorsController {
  constructor(private readonly colorsService: ColorService) {}

  @ApiOperation({ summary: 'Create Color' })
  @Post()
  create(@Body() createColorDto: CreateColorDto) {
    return this.colorsService.create(createColorDto);
  }

  @ApiOperation({ summary: 'Find All Colors' })
  @Get()
  findAll(@Query() searchDto: SearchDto) {
    return this.colorsService.findAll(searchDto);
  }

  @ApiOperation({ summary: 'Find Color By Id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colorsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update Color' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColorDto: UpdateColorDto) {
    return this.colorsService.update(+id, updateColorDto);
  }

  @ApiOperation({ summary: 'Remove Color' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colorsService.remove(+id);
  }
}
