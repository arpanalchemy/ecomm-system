import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductHasTagsService } from './product-has-tags.service';
import { CreateProductHasTagDto } from './dto/create-product-has-tag.dto';
import { UpdateProductHasTagDto } from './dto/update-product-has-tag.dto';
import { SearchDto } from 'src/users/dto/search.dto';

@Controller('product-has-tags')
export class ProductHasTagsController {
  constructor(private readonly productHasTagsService: ProductHasTagsService) {}

  @Post()
  create(@Body() createProductHasTagDto: CreateProductHasTagDto) {
    return this.productHasTagsService.create(createProductHasTagDto);
  }

  @Get()
  findAll(@Query() searchDto: SearchDto) {
    return this.productHasTagsService.findAll(searchDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productHasTagsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductHasTagDto: UpdateProductHasTagDto) {
    return this.productHasTagsService.update(+id, updateProductHasTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productHasTagsService.remove(+id);
  }
}
