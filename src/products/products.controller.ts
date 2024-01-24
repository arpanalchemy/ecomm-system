import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchDto } from 'src/users/dto/search.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@ApiTags('Product')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Create Product' })
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() CreateProductDto:CreateProductDto, @UploadedFile() file: Express.Multer.File) {
    console.log("here>>>",CreateProductDto)
    return this.productsService.create(CreateProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find All Products' })
  findAll(@Query() searchDto: SearchDto) {
    return this.productsService.findAll(searchDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find Product By Id' })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Product By Id' })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove Product' })
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
