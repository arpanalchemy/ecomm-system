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
import { ProductHasMediaService } from './product-has-media.service';
import { CreateProductHasMediaDto } from './dto/create-product-has-media.dto';
import { UpdateProductHasMediaDto } from './dto/update-product-has-media.dto';
import { SearchDto } from 'src/users/dto/search.dto';

@Controller('product-has-media')
export class ProductHasMediaController {
  constructor(
    private readonly productHasMediaService: ProductHasMediaService,
  ) {}

  @Post()
  create(@Body() createProductHasMediaDto: CreateProductHasMediaDto) {
    return this.productHasMediaService.create(createProductHasMediaDto);
  }

  @Get()
  findAll(@Query() SearchDto: SearchDto) {
    return this.productHasMediaService.findAll(SearchDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productHasMediaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductHasMediaDto: UpdateProductHasMediaDto,
  ) {
    return this.productHasMediaService.update(+id, updateProductHasMediaDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productHasMediaService.remove(+id);
  // }
}
